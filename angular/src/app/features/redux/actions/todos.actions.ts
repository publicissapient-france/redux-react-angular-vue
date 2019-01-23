import { Todo, TodoCategory } from 'App/domains/todo.model';

import { Action } from '@ngrx/store';

export enum ActionTypes {
  Load                = '[Redux:Todos] Load',
  LoadSuccess         = '[Redux:Todos] LoadSuccess',

  Add                 = '[Redux:Todos] Add',
  AddSuccess          = '[Redux:Todos] AddSuccess',

  Update              = '[Redux:Todos] Update',
  UpdateSuccess       = '[Redux:Todos] UpdateSuccess',

  Remove              = '[Redux:Todos] Remove',
  RemoveSuccess       = '[Redux:Todos] RemoveSuccess',

  Category            = '[Redux:Todos] Category',

  Filter              = '[Redux:Todos] Filter',
  SwitchFilterEnabled = '[Redux:Todos] SwitchFilterEnabled',
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

export class Category implements Action {
  readonly type = ActionTypes.Category;
  constructor(public payload: TodoCategory) {}
}

export class Filter implements Action {
  readonly type = ActionTypes.Filter;
  constructor(public payload: string) {}
}

export class SwitchFilterEnabled implements Action {
  readonly type = ActionTypes.SwitchFilterEnabled;
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

  | Category

  | Filter
  | SwitchFilterEnabled
;
