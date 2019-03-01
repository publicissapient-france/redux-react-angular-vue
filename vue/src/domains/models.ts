export interface Todo {
  id: number;
  label: string;
  done: boolean;
}

export interface TodoStore {
  todos: Todo[];
  category: string;
}
