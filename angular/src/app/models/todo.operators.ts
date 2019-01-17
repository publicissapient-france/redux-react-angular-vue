import { Todo } from './todo.model';

export const toggleDone = (todo: Todo) => ({ ...todo, done: !todo.done });

export const filter = (todos: Todo[], text: string) => {
  if (!text) {
    return todos;
  }
  const pattern = new RegExp(text); // TODO: need to be escaped...
  return todos.filter(todo =>  !!todo.text.match(pattern));
};
