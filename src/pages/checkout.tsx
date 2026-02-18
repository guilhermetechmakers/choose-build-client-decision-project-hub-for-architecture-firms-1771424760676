import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PLANS = [
  { id: 'starter', name: 'Starter', price: 29, description: 'Up to 3 projects' },
  { id: 'pro', name: 'Professional', price: 49, description: 'Unlimited projects', recommended: true },
  { id: 'enterprise', name: 'Enterprise', price: 99, description: 'SSO, priority support' },
];

export function Checkout() {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Choose a plan</h1>
        <p className="text-muted-foreground">Subscription and payment management.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card key={plan.id} className={plan.recommended ? 'border-primary ring-2 ring-primary/20' : ''}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{plan.name}</CardTitle>
              {plan.recommended && (
                <span className="text-xs font-medium text-primary">Recommended</span>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              <Button variant={plan.recommended ? 'accent' : 'outline'} className="w-full mt-4">
                Select
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
