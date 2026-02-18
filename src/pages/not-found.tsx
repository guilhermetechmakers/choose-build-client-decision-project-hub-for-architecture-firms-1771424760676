import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="mt-2 text-muted-foreground max-w-sm">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild variant="accent" className="mt-6">
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
