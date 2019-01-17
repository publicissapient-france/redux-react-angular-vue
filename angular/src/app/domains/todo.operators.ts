import { escapeRegExp } from 'lodash';

import { Todo, TodoStatus } from './todo.model';

export const toggleDone = (todo: Todo): Todo => ({ ...todo, done: !todo.done });

export const filter = (todos: Todo[], text: string) => {
  if (!text) {
    return todos;
  }
  const exp = new RegExp(escapeRegExp(text));
  return todos.filter(todo => !!todo.text.match(exp));
};

export const getStatus = (todos: Todo[]): TodoStatus => ({
  doneCount: todos.filter(todo => todo.done).length,
  totalCount: todos.length
});
