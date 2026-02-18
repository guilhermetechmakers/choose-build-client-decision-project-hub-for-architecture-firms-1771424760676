import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileCheck, Search, Filter, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
const MOCK_DECISIONS = [
  { id: '1', title: 'Exterior finish', description: 'Select material and color for facade.', status: 'approved', costDelta: 0, updatedAt: '2 days ago', thumbnail: null },
  { id: '2', title: 'Kitchen layout options', description: 'Option A: island. Option B: peninsula.', status: 'pending', costDelta: 5000, updatedAt: '5 hours ago', thumbnail: null },
  { id: '3', title: 'Window schedule', description: 'Standard vs upgraded windows.', status: 'changes_requested', costDelta: 12000, updatedAt: '1 week ago', thumbnail: null },
];

const statusVariant: Record<string, 'success' | 'pending' | 'warning' | 'secondary'> = {
  approved: 'success',
  pending: 'pending',
  changes_requested: 'warning',
  draft: 'secondary',
};

export function DecisionLog() {
  const { projectId } = useParams();
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = MOCK_DECISIONS.find((d) => d.id === selectedId);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Decision log</h1>
          <p className="text-muted-foreground">Structured decision cards with approval controls and audit trail.</p>
        </div>
        <Button variant="accent" className="gap-2" asChild>
          <Link to={`/dashboard/projects/${projectId}/decisions/new`}>
            <FileCheck className="h-4 w-4" />
            Create decision
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search decisions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="icon" aria-label="Filter">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Decisions</CardTitle>
          <p className="text-sm text-muted-foreground">Click a row to open the detail drawer.</p>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-border">
            {MOCK_DECISIONS.filter((d) => !search || d.title.toLowerCase().includes(search.toLowerCase())).map((d) => (
              <li
                key={d.id}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-4 first:pt-0 last:pb-0 cursor-pointer hover:bg-muted/50 rounded-lg px-2 -mx-2 transition-colors"
                onClick={() => setSelectedId(d.id)}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-lg bg-muted flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{d.title}</p>
                  <p className="text-sm text-muted-foreground truncate">{d.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {d.costDelta !== undefined && d.costDelta > 0 && (
                    <span className="text-sm font-medium text-foreground">+${d.costDelta.toLocaleString()}</span>
                  )}
                  <Badge variant={statusVariant[d.status] ?? 'secondary'}>{d.status.replace('_', ' ')}</Badge>
                  <span className="text-xs text-muted-foreground">{d.updatedAt}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent showClose className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">{selected.description}</p>
                <div className="flex gap-2">
                  <Badge variant={statusVariant[selected.status]}>{selected.status.replace('_', ' ')}</Badge>
                  {selected.costDelta !== undefined && selected.costDelta > 0 && (
                    <Badge variant="outline">Cost impact: +${selected.costDelta.toLocaleString()}</Badge>
                  )}
                </div>
                <div className="rounded-lg border border-border p-4">
                  <h4 className="text-sm font-medium mb-2">Options</h4>
                  <p className="text-sm text-muted-foreground">Gallery, PDFs, cost deltas, and recommendation would appear here. Approval controls and version history in the full detail drawer.</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
