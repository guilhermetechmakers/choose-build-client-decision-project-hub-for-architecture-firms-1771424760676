import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { UserPlus } from 'lucide-react';

const MOCK_USERS = [
  { id: '1', name: 'Jane Smith', email: 'jane@firm.com', role: 'PM' },
  { id: '2', name: 'John Doe', email: 'john@firm.com', role: 'Architect' },
];

export function UserManagement() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">User management</h1>
          <p className="text-muted-foreground">Invite users, assign roles, bulk actions.</p>
        </div>
        <Button variant="accent" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Invite user
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
          <CardDescription>Invite form, user table, role definitions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search users..." className="max-w-sm mb-4" />
          <div className="rounded-md border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Name</th>
                  <th className="text-left p-3 font-medium">Email</th>
                  <th className="text-left p-3 font-medium">Role</th>
                  <th className="w-24" />
                </tr>
              </thead>
              <tbody>
                {MOCK_USERS.map((u) => (
                  <tr key={u.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-3">{u.name}</td>
                    <td className="p-3 text-muted-foreground">{u.email}</td>
                    <td className="p-3"><Badge variant="secondary">{u.role}</Badge></td>
                    <td className="p-3"><Button variant="ghost" size="sm">Edit</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
