import { Todo, TodoStatus, TodoCategory } from './todo.models';

export const todoBuilder = (text: string, done = false): Partial<Todo> => ({
  text,
  done
});

export const toggleDone = (todo: Todo): Todo => ({
  ...todo,
  done: !todo.done
});

export const getStatus = (todos: Todo[]): TodoStatus => ({
  remainCount: todos.filter(todo => !todo.done).length,
  totalCount: todos.length
});

export const filterByCategory = (todos: Todo[], category: TodoCategory) => {
  if (category === 'all') {
    return todos;
  }
  const done = category === 'completed';
  return todos.filter(todo => todo.done === done);
};
