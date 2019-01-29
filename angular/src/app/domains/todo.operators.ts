import { escapeRegExp } from 'lodash';

import { Todo, TodoStatus, TodoCategory } from './todo.model';

export const todoBuilder = (text: string, done = false): Todo => ({ id: null, text, done });

export const toggleDone = (todo: Todo): Todo => ({ ...todo, done: !todo.done });

export const editText = (todo: Todo, text: string): Todo => ({ ...todo, text });

export const isTextFree = (todos: Todo[], text: string) => {
  return text ? !todos.find(todo => todo.text === text) : false;
};

export const findByText = (todos: Todo[], text: string) => todos.find(todo => todo.text === text);

export const hiddenCategory = (todos: Todo[], text: string, category: TodoCategory) => {
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
