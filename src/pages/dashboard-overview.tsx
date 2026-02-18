import { Link } from 'react-router-dom';
import { FileCheck, FolderKanban, Calendar, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const MOCK_PROJECTS = [
  { id: '1', name: 'Riverside Residence', status: 'active' as const, phase: 'Schematic Design', progress: 45, pendingApprovals: 2 },
  { id: '2', name: 'Downtown Office', status: 'active' as const, phase: 'Design Development', progress: 70, pendingApprovals: 0 },
  { id: '3', name: 'Lake House', status: 'on_hold' as const, phase: 'Concept', progress: 20, pendingApprovals: 1 },
];

const MOCK_ACTIVITY = [
  { id: '1', type: 'approval', text: 'Client approved "Exterior finish" on Riverside Residence', time: '2 hours ago' },
  { id: '2', type: 'decision', text: 'New decision published: "Kitchen layout options"', time: '5 hours ago' },
  { id: '3', type: 'comment', text: 'New comment on "Window schedule"', time: '1 day ago' },
];

export function DashboardOverview() {
  const pendingTotal = MOCK_PROJECTS.reduce((s, p) => s + p.pendingApprovals, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your projects and pending approvals.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending approvals</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pendingTotal}</div>
            <p className="text-xs text-muted-foreground">Require client action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{MOCK_PROJECTS.filter((p) => p.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Meetings this week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Decisions this month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">Published</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Recent activity and status</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/projects">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {MOCK_PROJECTS.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/dashboard/projects/${p.id}`}
                    className={cn(
                      'flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50'
                    )}
                  >
                    <div>
                      <p className="font-medium text-foreground">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.phase} · {p.progress}%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {p.pendingApprovals > 0 && (
                        <Badge variant="pending">{p.pendingApprovals} pending</Badge>
                      )}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>Latest updates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {MOCK_ACTIVITY.map((a) => (
                <li key={a.id} className="flex gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">{a.text}</p>
                    <p className="text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
