import { Link } from 'react-router-dom';
import { Plus, FolderKanban } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
const MOCK_PROJECTS = [
  { id: '1', name: 'Riverside Residence', status: 'active', phase: 'Schematic Design', progress: 45, client: 'Acme Corp' },
  { id: '2', name: 'Downtown Office', status: 'active', phase: 'Design Development', progress: 70, client: 'Beta Inc' },
  { id: '3', name: 'Lake House', status: 'on_hold', phase: 'Concept', progress: 20, client: 'Smith Family' },
];

export function ProjectsList() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage timelines and phases.</p>
        </div>
        <Button variant="accent" className="gap-2">
          <Plus className="h-4 w-4" />
          New project
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Input placeholder="Search projects..." className="max-w-sm" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROJECTS.map((p) => (
          <Link key={p.id} to={`/dashboard/projects/${p.id}`}>
            <Card className="h-full transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer">
              <CardHeader className="flex flex-row items-start justify-between">
                <FolderKanban className="h-10 w-10 text-primary/70" />
                <Badge variant={p.status === 'active' ? 'default' : 'secondary'}>{p.status}</Badge>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <CardDescription className="mt-1">{p.client} · {p.phase}</CardDescription>
                <div className="mt-4">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{p.progress}% complete</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
