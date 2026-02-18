import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Billing() {
  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <p className="text-muted-foreground">Plan selection, payment form, invoice history, add-ons.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
          <CardDescription>Manage subscription and payment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="font-medium">Professional</p>
              <p className="text-sm text-muted-foreground">$49/month per seat</p>
            </div>
            <Badge variant="success">Active</Badge>
          </div>
          <Button variant="outline">View invoices</Button>
        </CardContent>
      </Card>
    </div>
  );
}
