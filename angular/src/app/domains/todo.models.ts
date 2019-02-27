export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type TodoCategory = 'all' | 'active' | 'completed';
