import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, MessageSquare, LayoutTemplate, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Decision Log',
    description: 'Structured decision cards with options, cost deltas, and approval controls. Immutable versions and audit trails.',
    icon: FileCheck,
  },
  {
    title: 'Contextual Messaging',
    description: 'Threads tied to decisions, files, and tasks—no more scattered email chains.',
    icon: MessageSquare,
  },
  {
    title: 'Templates & Workflows',
    description: 'Reusable project and decision templates to standardize delivery and speed setup.',
    icon: LayoutTemplate,
  },
  {
    title: 'Reports & Analytics',
    description: 'Pending approvals, turnaround times, and exportable handover packages.',
    icon: BarChart3,
  },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
          <span className="text-xl font-semibold text-primary">Choose & Build</span>
          <nav className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Log in
            </Link>
            <Button asChild variant="accent">
              <Link to="/signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" aria-hidden />
        <div className="container relative mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Project management & client decisions,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              in one place
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            For architecture firms: run projects from kickoff to handover with a single source of truth for every client choice and approval.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="accent" className="gap-2 text-base shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/signup">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dashboard">View demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground">How it works</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            Decision-first UX with cost deltas and recommendations. Legal-grade versioning and timestamped approvals.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description, icon: Icon }, i) => (
              <div
                key={title}
                className={cn(
                  'rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to reduce scope creep?</h2>
          <p className="mt-2 text-muted-foreground">
            Join architecture firms using Choose & Build for faster approvals and audit-ready records.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-6">
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">© Choose & Build</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
