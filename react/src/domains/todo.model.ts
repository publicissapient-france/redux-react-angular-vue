export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoStatus {
  remainCount: number;
  totalCount: number;
}

export type TodoCategory = 'all' | 'active' | 'completed';
