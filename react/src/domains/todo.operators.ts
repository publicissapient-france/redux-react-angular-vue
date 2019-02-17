import { Todo, TodoStatus, TodoCategory } from './todo.models';

export const todoBuilder = (text: string, done = false): Partial<Todo> => ({ text, done });

export const toggleDone = (todo: Todo): Todo => ({ ...todo, done: !todo.done });

export const editText = (todo: Todo, text: string): Todo => ({ ...todo, text });

export const getStatus = (todos: Todo[]): TodoStatus => ({
  remainCount: todos.filter(todo => !todo.done).length,
  totalCount: todos.length
});

export const filterByCategory = (todos: Todo[], category: TodoCategory) => {
  let filtered = todos;
  if (category !== 'all') {
    const done = category === 'completed';
    filtered = filtered.filter(todo => todo.done === done);
  }
  return filtered;
};
