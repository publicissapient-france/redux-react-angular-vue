import { Todo } from '@/domains/models';

let index = 0;
let todos: Todo[] = [
  { id: index++, label: 'Todo 1', done: false },
  { id: index++, label: 'Todo 2', done: true },
];

export function addTodo(todo: Todo) {
  todos.push({
    ...todo,
    id: index++
  });
}

export function getTodos() {
  return [...todos];
}

export function updateTodo(updatedTodo: Todo) {
  const updatedIndex = todos.findIndex(todo => todo.id === updatedTodo.id);

  if (updatedIndex === -1) {
    return;
  }

  todos[updatedIndex] = updatedTodo;
}

export function removeTodo(removedTodo: Todo) {
  todos = todos.filter(todo => todo !== removedTodo);
}
