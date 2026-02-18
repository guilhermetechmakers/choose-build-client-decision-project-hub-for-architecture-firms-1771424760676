import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-primary rounded-r-3xl flex-col justify-center px-12 text-primary-foreground">
        <h2 className="text-2xl font-bold">Choose & Build</h2>
        <p className="mt-2 text-primary-foreground/90">
          Centralized project management and client decisions for architecture firms.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md mx-auto">
          <div className="flex gap-4 mb-8 border-b border-border">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(
                  'pb-3 text-sm font-medium border-b-2 transition-colors',
                  isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                )
              }
            >
              Log in
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                cn(
                  'pb-3 text-sm font-medium border-b-2 transition-colors',
                  isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                )
              }
            >
              Sign up
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
