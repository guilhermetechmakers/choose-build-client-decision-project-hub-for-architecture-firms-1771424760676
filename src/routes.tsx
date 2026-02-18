import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { AuthLayout } from '@/layouts/auth-layout';
import { useAuth } from '@/contexts/auth-context';
import { Landing } from '@/pages/landing';
import { Login } from '@/pages/login';
import { Signup } from '@/pages/signup';
import { ForgotPassword } from '@/pages/forgot-password';
import { DashboardOverview } from '@/pages/dashboard-overview';
import { ProjectsList } from '@/pages/projects-list';
import { ProjectBoard } from '@/pages/project-board';
import { DecisionLog } from '@/pages/decision-log';
import { CreateDecision } from '@/pages/create-decision';
import { Messages } from '@/pages/messages';
import { FilesDrawings } from '@/pages/files-drawings';
import { Meetings } from '@/pages/meetings';
import { Templates } from '@/pages/templates';
import { Reports } from '@/pages/reports';
import { Settings } from '@/pages/settings';
import { Profile } from '@/pages/profile';
import { Billing } from '@/pages/billing';
import { Checkout } from '@/pages/checkout';
import { AdminDashboard } from '@/pages/admin-dashboard';
import { UserManagement } from '@/pages/user-management';
import { Legal } from '@/pages/legal';
import { Help } from '@/pages/help';
import { NotFound } from '@/pages/not-found';

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div className="flex min-h-screen items-center justify-center">Loading…</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <AuthLayout />, children: [{ index: true, element: <Login /> }] },
  { path: '/signup', element: <AuthLayout />, children: [{ index: true, element: <Signup /> }] },
  { path: '/forgot-password', element: <AuthLayout />, children: [{ index: true, element: <ForgotPassword /> }] },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardOverview /> },
          { path: 'projects', element: <ProjectsList /> },
          { path: 'projects/:projectId', element: <ProjectBoard /> },
          { path: 'projects/:projectId/decisions', element: <DecisionLog /> },
          { path: 'projects/:projectId/decisions/new', element: <CreateDecision /> },
          { path: 'messages', element: <Messages /> },
          { path: 'files', element: <FilesDrawings /> },
          { path: 'meetings', element: <Meetings /> },
          { path: 'templates', element: <Templates /> },
          { path: 'reports', element: <Reports /> },
          { path: 'settings', element: <Settings /> },
          { path: 'profile', element: <Profile /> },
          { path: 'billing', element: <Billing /> },
          { path: 'checkout', element: <Checkout /> },
          { path: 'admin', element: <AdminDashboard /> },
          { path: 'admin/users', element: <UserManagement /> },
        ],
      },
    ],
  },
  { path: '/privacy', element: <Legal title="Privacy Policy" content="This is a placeholder privacy policy. Replace with your legal text and contact links." /> },
  { path: '/terms', element: <Legal title="Terms of Service" content="This is a placeholder terms of service. Replace with your legal text." /> },
  { path: '/cookies', element: <Legal title="Cookie Policy" content="This is a placeholder cookie policy. Replace with your legal text." /> },
  { path: '/help', element: <Help /> },
  { path: '*', element: <NotFound /> },
]);
