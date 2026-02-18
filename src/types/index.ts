export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: string;
  firm_id?: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'on_hold' | 'completed';
  phase: string;
  progress_percent: number;
  client_name?: string;
  updated_at: string;
}

export interface DecisionOption {
  id: string;
  title: string;
  description?: string;
  image_url?: string;
  cost_delta?: number;
  recommended?: boolean;
}

export interface Decision {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  status: 'draft' | 'pending' | 'approved' | 'changes_requested';
  options: DecisionOption[];
  required_approvers?: string[];
  published_at?: string;
  approved_at?: string;
  updated_at: string;
  version: number;
}

export interface Phase {
  id: string;
  name: string;
  order: number;
  progress_percent: number;
  start_date?: string;
  end_date?: string;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  phase_id: string;
  completed: boolean;
  due_date?: string;
}

export interface Thread {
  id: string;
  resource_type: 'decision' | 'file' | 'task' | 'meeting';
  resource_id: string;
  messages: Message[];
  updated_at: string;
}

export interface Message {
  id: string;
  thread_id: string;
  author_id: string;
  author_name: string;
  body: string;
  created_at: string;
  read: boolean;
}
