import { Todo } from "./model";

let id = 0;
const getId = () => ++id;

let todos: Todo[] = [];

export const getAll = () => todos;

export const get = (id: number) => {
  return todos.find(t => t.id === id);
};

export const add = (todo: Todo) => {
  todos = [{ ...todo, id: getId() }, ...todos];
  return true;
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

export const remove = (todo: Todo) => {
  const index = todos.findIndex(t => t.id === todo.id);
  if (index === -1) {
    return false;
  }
  todos = [...todos];
  todos.splice(index, 1);
  return true;
};

/*export const remove = (data: Todo | number) => {
  let id: number;
  if (typeof data === 'number') {
    id = data;
  } else {
    id = data.id
  }
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return false;
  }
  todos = [...todos];
  todos.splice(index, 1);
};*/
