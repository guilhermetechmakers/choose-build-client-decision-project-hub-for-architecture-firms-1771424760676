import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const STEPS = ['Info', 'Options', 'Cost & recommendation', 'Audience & publish'];

export function CreateDecision() {
  const { projectId } = useParams();

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/dashboard/projects" className="hover:text-foreground">Projects</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to={`/dashboard/projects/${projectId}`} className="hover:text-foreground">Project</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to={`/dashboard/projects/${projectId}/decisions`} className="hover:text-foreground">Decision log</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">New decision</span>
      </nav>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Create decision</h1>
        <p className="text-muted-foreground">Multi-step publisher: info, options, cost, recommendation, audience.</p>
      </div>

      <div className="flex gap-2">
        {STEPS.map((step, i) => (
          <div
            key={step}
            className={cn(
              'flex-1 rounded-md border px-3 py-2 text-center text-sm font-medium',
              i === 0 ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'
            )}
          >
            {step}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step 1: Basic info</CardTitle>
          <CardDescription>Title and short description for the decision card.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g. Exterior finish" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Brief context for the client" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" asChild>
              <Link to={`/dashboard/projects/${projectId}/decisions`}>Cancel</Link>
            </Button>
            <Button variant="accent">Next: Options</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
