import { escapeRegExp } from 'lodash';

import { Todo, TodoStatus, TodoCategory } from './todo.models';

export const todoBuilder = (text: string, done = false): Partial<Todo> => ({ text, done });

export const toggleDone = (todo: Todo): Todo => ({ ...todo, done: !todo.done });

export const editText = (todo: Todo, text: string): Todo => ({ ...todo, text });

export const isTextFree = (todos: Todo[], text: string) => {
  return text ? !todos.find(todo => todo.text === text) : false;
};

export const findByText = (todos: Todo[], text: string) => todos.find(todo => todo.text === text);

export const hiddenCategory = (todos: Todo[], text: string, category: TodoCategory): TodoCategory | void => {
  const todo = findByText(todos, text);
  if (!todo) {
    return;
  }
  if (todo.done === false && category === 'completed') {
    return 'active';
  }
  if (todo.done === true && category === 'active') {
    return 'completed';
  }
};

export const getStatus = (todos: Todo[]): TodoStatus => ({
  remainCount: todos.filter(todo => !todo.done).length,
  totalCount: todos.length
});

export const filterByCategoryAndText = (todos: Todo[], category: TodoCategory, text: string) => {
  let filtered = todos;
  if (category !== 'all') {
    const done = category === 'completed';
    filtered = filtered.filter(todo => todo.done === done);
  }
  if (text) {
    const exp = new RegExp(escapeRegExp(text));
    filtered = filtered.filter(todo => !!todo.text.match(exp));
  }
  return filtered;
};
