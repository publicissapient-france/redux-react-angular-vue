import { ReduxTodoAddComponent } from './redux/redux-todo-add/redux-todo-add.component';
import { ReduxTodoCategoryComponent } from './redux/redux-todo-category/redux-todo-category.component';
import { ReduxTodoListComponent } from './redux/redux-todo-list/redux-todo-list.component';
import { ReduxTodoComponent } from './redux/redux-todo.component';
import { UiTodoAddComponent } from './ui/ui-todo-add/ui-todo-add.component';
import { UiTodoCategoryComponent } from './ui/ui-todo-category/ui-todo-category.component';
import { UiTodoListComponent } from './ui/ui-todo-list/ui-todo-list.component';
import { VanillaTodoComponent } from './vanilla/vanilla-todo.component';

export const components = [
  // Common Ui Components
  UiTodoAddComponent,
  UiTodoCategoryComponent,
  UiTodoListComponent,

  // Vanilla implementation
  VanillaTodoComponent,

  // Redux implementation
  ReduxTodoAddComponent,
  ReduxTodoCategoryComponent,
  ReduxTodoListComponent,
  ReduxTodoComponent
];
