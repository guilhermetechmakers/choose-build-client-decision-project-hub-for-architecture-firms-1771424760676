import * as React from 'react';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

const DEMO_USER: User = {
  id: '1',
  email: 'demo@chooseandbuild.com',
  name: 'Demo User',
  role: 'pm',
  firm_id: 'f1',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) setUserState(DEMO_USER);
    setIsLoading(false);
  }, []);

  const login = React.useCallback(async (_email: string, _password: string) => {
    localStorage.setItem('access_token', 'demo-token');
    setUserState(DEMO_USER);
  }, []);

  const signup = React.useCallback(async (_email: string, _password: string, name: string) => {
    localStorage.setItem('access_token', 'demo-token');
    setUserState({ ...DEMO_USER, name, email: _email });
  }, []);

  const logout = React.useCallback(() => {
    localStorage.removeItem('access_token');
    setUserState(null);
  }, []);

  const setUser = React.useCallback((u: User | null) => {
    setUserState(u);
  }, []);

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
