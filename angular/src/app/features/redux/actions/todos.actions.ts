import { Todo, TodoCategory } from 'App/domains/todo.model';

import { Action } from '@ngrx/store';

export enum ActionTypes {
  Load           = '[Redux:Todos] Load',
  LoadSuccess    = '[Redux:Todos] LoadSuccess',

  Add            = '[Redux:Todos] Add',
  AddSuccess     = '[Redux:Todos] AddSuccess',

  Update         = '[Redux:Todos] Update',
  UpdateSuccess  = '[Redux:Todos] UpdateSuccess',

  Remove         = '[Redux:Todos] Remove',
  RemoveSuccess  = '[Redux:Todos] RemoveSuccess',

  Text           = '[Redux:Todos] Text',
  Category       = '[Redux:Todos] Category',
  FilterEnabled  = '[Redux:Todos] FilterEnabled',
}

export class Load implements Action {
  readonly type = ActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: Todo[]) {}
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: Todo) {}
}
export class AddSuccess implements Action {
  readonly type = ActionTypes.AddSuccess;
  constructor(public payload: Todo) {}
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: Todo) {}
}
export class UpdateSuccess implements Action {
  readonly type = ActionTypes.UpdateSuccess;
  constructor(public payload: Todo) {}
}

export class Remove implements Action {
  readonly type = ActionTypes.Remove;
  constructor(public payload: Todo) {}
}
export class RemoveSuccess implements Action {
  readonly type = ActionTypes.RemoveSuccess;
  constructor(public payload: Todo) {}
}

export class Text implements Action {
  readonly type = ActionTypes.Text;
  constructor(public payload: string) {}
}

export class Category implements Action {
  readonly type = ActionTypes.Category;
  constructor(public payload: TodoCategory) {}
}

export class FilterEnabled implements Action {
  readonly type = ActionTypes.FilterEnabled;
  constructor(public payload: boolean) {}
}

export type ActionsUnion =
  | Load
  | LoadSuccess

  | Add
  | AddSuccess

  | Update
  | UpdateSuccess

  | Remove
  | RemoveSuccess

  | Text
  | Category
  | FilterEnabled
;
