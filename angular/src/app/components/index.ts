import { NavComponent } from './nav/nav.component';
import { ReduxTodoAddComponent } from './redux-todo/redux-todo-add/redux-todo-add.component';
import { ReduxTodoCategoryComponent } from './redux-todo/redux-todo-category/redux-todo-category.component';
import { ReduxTodoListComponent } from './redux-todo/redux-todo-list/redux-todo-list.component';
import { ReduxTodoStatusComponent } from './redux-todo/redux-todo-status/redux-todo-status.component';
import { ReduxTodoComponent } from './redux-todo/redux-todo.component';
import { UiTodoAddComponent } from './ui-todo/ui-todo-add/ui-todo-add.component';
import { UiTodoCategoryComponent } from './ui-todo/ui-todo-category/ui-todo-category.component';
import { UiTodoListComponent } from './ui-todo/ui-todo-list/ui-todo-list.component';
import { UiTodoStatusComponent } from './ui-todo/ui-todo-status/ui-todo-status.component';
import { VanillaTodoComponent } from './vanilla-todo/vanilla-todo.component';

export const components = [
  NavComponent,

  // Ui Components
  UiTodoAddComponent,
  UiTodoCategoryComponent,
  UiTodoListComponent,
  UiTodoStatusComponent,

  // Vanilla implementation
  VanillaTodoComponent,

  // Redux implementation
  ReduxTodoAddComponent,
  ReduxTodoCategoryComponent,
  ReduxTodoListComponent,
  ReduxTodoStatusComponent,
  ReduxTodoComponent
];
