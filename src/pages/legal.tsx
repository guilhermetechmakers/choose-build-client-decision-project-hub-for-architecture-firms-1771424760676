import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LegalProps {
  title: string;
  content: string;
}

export function Legal({ title, content }: LegalProps) {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground whitespace-pre-wrap">{content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
