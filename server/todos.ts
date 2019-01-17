import { Todo } from "./model";

let id = 0;
const getId = () => ++id;

let todos: Todo[] = [];

export const getAll = () => todos;

export const get = (id: number) => {
  return todos.find(t => t.id === id);
};

export const add = (todo: Todo): Todo => {
  const added = { ...todo, id: getId() };
  todos = [added, ...todos];
  return added;
};

export const update = (todo: Todo) => {
  const index = todos.findIndex(t => t.id === todo.id);
  if (index === -1) {
    return false;
  }
  todos = [...todos];
  todos.splice(index, 1, todo);
  return true;
};

export const remove = (todoId: number) => {
  const index = todos.findIndex(t => t.id === todoId);
  if (index === -1) {
    return false;
  }
  todos = [...todos];
  todos.splice(index, 1);
  return true;
};
