import { escapeRegExp } from 'lodash';

import { Todo, TodoStatus, TodoCategory } from './todo.model';

export const toggleDone = (todo: Todo): Todo => ({ ...todo, done: !todo.done });

export const editText = (todo: Todo, text: string): Todo => ({ ...todo, text });

export const isTextFree = (todos: Todo[], text: string) => {
  return text ? !todos.find(todo => todo.text === text) : false;
};

export const getStatus = (todos: Todo[]): TodoStatus => ({
  remainCount: todos.filter(todo => !todo.done).length,
  totalCount: todos.length
});

// ==== Pipable operators ====

export type Pipable<T> = (...args: any[]) => (todos: T) => any;

export const filterByCategory: Pipable<Todo[]> = (category: TodoCategory) => (todos) => {
  if (category === 'all') {
    return todos;
  }
  const done = category === 'completed';
  return todos.filter(todo => todo.done === done);
};

export const filterByText: Pipable<Todo[]> = (text: string) => (todos) => {
  if (!text) {
    return todos;
  }
  const exp = new RegExp(escapeRegExp(text));
  return todos.filter(todo => !!todo.text.match(exp));
};

export const pipe = <T>(input: any) => (...operators: CallableFunction[]): T =>
  operators.reduce((result: any, operator) => operator(result), input);
