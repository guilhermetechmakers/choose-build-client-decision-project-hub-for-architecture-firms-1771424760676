import { MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const MOCK_THREADS = [
  { id: '1', context: 'Exterior finish · Decision', preview: 'Client asked about lead time for Option B.', updated: '2 hours ago' },
  { id: '2', context: 'Kitchen layout · Decision', preview: 'Can we see a 3D view?', updated: '5 hours ago' },
];

export function Messages() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Contextual threads tied to decisions, files, and tasks.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Threads</CardTitle>
            <CardDescription>Select a thread to view and reply.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {MOCK_THREADS.map((t) => (
                <li
                  key={t.id}
                  className="rounded-lg border border-border p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <p className="font-medium text-sm text-foreground">{t.context}</p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{t.preview}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.updated}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Select a thread or start a new conversation linked to a decision or file.</p>
            <Button variant="outline" className="mt-4">New thread</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
