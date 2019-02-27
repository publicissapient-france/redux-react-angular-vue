import { ReduxTodoAddComponent } from './redux/redux-todo-add/redux-todo-add.component';
import { ReduxTodoCategoryComponent } from './redux/redux-todo-category/redux-todo-category.component';
import { ReduxTodoListComponent } from './redux/redux-todo-list/redux-todo-list.component';
import { ReduxTodoStatusComponent } from './redux/redux-todo-status/redux-todo-status.component';
import { ReduxTodoComponent } from './redux/redux-todo/redux-todo.component';
import { UiTodoAddComponent } from './ui/ui-todo-add/ui-todo-add.component';
import { UiTodoCategoryComponent } from './ui/ui-todo-category/ui-todo-category.component';
import { UiTodoListComponent } from './ui/ui-todo-list/ui-todo-list.component';
import { UiTodoStatusComponent } from './ui/ui-todo-status/ui-todo-status.component';
import { VanillaTodoComponent } from './vanilla/vanilla-todo.component';

export const components = [
  // Common Ui Components
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
