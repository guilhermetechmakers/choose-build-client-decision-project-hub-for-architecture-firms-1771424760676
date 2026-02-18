import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HelpCircle, Mail } from 'lucide-react';

const FAQ = [
  { q: 'How do I publish a decision?', a: 'Go to the project → Decision log → Create decision. Complete the multi-step form and set the audience, then publish.' },
  { q: 'Can clients approve from email?', a: 'Clients receive a link to the decision card in the client portal. They can approve, request changes, or add comments there.' },
  { q: 'How is the audit trail stored?', a: 'Every publish and approval creates an immutable version with timestamp and user. Export handover packages include full audit metadata.' },
];

export function Help() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Help & support</h1>
        <p className="text-muted-foreground">FAQs, guides, contact form.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently asked questions
          </CardTitle>
          <CardDescription>Quick answers to common questions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="border-b border-border pb-4 last:border-0">
              <p className="font-medium text-foreground">{q}</p>
              <p className="text-sm text-muted-foreground mt-1">{a}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact support
          </CardTitle>
          <CardDescription>Send a message and we’ll get back to you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="Describe your issue" className="min-h-[100px]" />
            </div>
            <Button type="submit" variant="accent">Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
