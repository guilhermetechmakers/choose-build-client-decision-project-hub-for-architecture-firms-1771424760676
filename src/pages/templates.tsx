import { LayoutTemplate } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Templates() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Templates library</h1>
        <p className="text-muted-foreground">Reusable project and decision templates; apply-template wizard.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LayoutTemplate className="h-5 w-5" />
            Templates
          </CardTitle>
          <CardDescription>List, editor, versioning, apply to new project.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
            <LayoutTemplate className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No templates yet. Create a template from an existing project to reuse phases and decisions.</p>
            <Button variant="outline" className="mt-4">Create template</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
