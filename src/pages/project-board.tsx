import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Milestone, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const PHASES = [
  { id: '1', name: 'Kickoff', order: 1, progress: 100, milestones: ['Contract signed', 'Kickoff meeting'] },
  { id: '2', name: 'Concept', order: 2, progress: 100, milestones: ['Site analysis', 'Concept sketches'] },
  { id: '3', name: 'Schematic Design', order: 3, progress: 45, milestones: ['Floor plans', 'Exterior finish decision'], active: true },
  { id: '4', name: 'Design Development', order: 4, progress: 0, milestones: [] },
  { id: '5', name: 'Permitting', order: 5, progress: 0, milestones: [] },
  { id: '6', name: 'Construction Admin', order: 6, progress: 0, milestones: [] },
  { id: '7', name: 'Handover', order: 7, progress: 0, milestones: [] },
];

export function ProjectBoard() {
  const { projectId } = useParams();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/dashboard/projects" className="hover:text-foreground">Projects</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Riverside Residence</span>
        </nav>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Project timeline</h1>
            <p className="text-muted-foreground">Phases and decision checkpoints.</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/dashboard/projects/${projectId}/decisions`}>Decision log</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phases</CardTitle>
          <p className="text-sm text-muted-foreground">Horizontal timeline with percent-complete; mobile collapses to vertical list.</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max md:min-w-0 md:flex-wrap">
              {PHASES.map((phase) => (
                <div
                  key={phase.id}
                  className={cn(
                    'flex-shrink-0 w-40 md:w-full md:max-w-[180px] rounded-lg border-2 transition-colors',
                    phase.active ? 'border-primary bg-primary/5' : 'border-border bg-card'
                  )}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-foreground">{phase.name}</span>
                      {phase.active && <Badge variant="pending">Active</Badge>}
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{phase.progress}%</p>
                  </div>
                  {phase.milestones.length > 0 && (
                    <ul className="px-3 pb-3 space-y-1">
                      {phase.milestones.map((m) => (
                        <li key={m} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Milestone className="h-3 w-3 shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Decision checkpoints
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between rounded-md border border-border p-3">
              <span className="text-sm font-medium">Exterior finish</span>
              <Badge variant="success">Approved</Badge>
            </li>
            <li className="flex items-center justify-between rounded-md border border-border p-3">
              <span className="text-sm font-medium">Kitchen layout options</span>
              <Badge variant="pending">Pending</Badge>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
