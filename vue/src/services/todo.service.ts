import { Todo } from '@/domains/models';

let index = 0;
let tasks: Todo[] = [
  { id: index++, label: 'Todo 1', done: false },
  { id: index++, label: 'Todo 2', done: true },
];

export function addTodo(task: Todo) {
  tasks.push({
    ...task,
    id: index++
  });
}

export function getTodos() {
  return [...tasks];
}

export function updateTodo(updatedTask: Todo) {
  const updatedIndex = tasks.findIndex(task => task.id === updatedTask.id);

  if (updatedIndex === -1) {
    return;
  }

  tasks[updatedIndex] = updatedTask;
}

export function removeTodo(removedTask: Todo) {
  tasks = tasks.filter(task => task !== removedTask);
}
