import { FolderOpen, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export function FilesDrawings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Files & drawings</h1>
          <p className="text-muted-foreground">Project assets with versions and link-to-decision.</p>
        </div>
        <Button variant="accent" className="gap-2">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Folder browser
          </CardTitle>
          <CardDescription>Folder tree, previewer, metadata, permissions, link-to-decision.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-dashed border-border p-12 text-center text-muted-foreground">
            <FolderOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No folders yet. Upload files or create a folder to get started.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
