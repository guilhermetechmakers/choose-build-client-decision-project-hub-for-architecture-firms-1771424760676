import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Meetings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Meetings & agendas</h1>
          <p className="text-muted-foreground">Agenda builder, scheduler, notes template, export minutes.</p>
        </div>
        <Button variant="accent" className="gap-2">
          <Calendar className="h-4 w-4" />
          Schedule meeting
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming</CardTitle>
          <CardDescription>Meetings linked to decisions and action items.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No upcoming meetings. Schedule one to add agendas and capture minutes.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
