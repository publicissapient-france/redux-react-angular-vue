import { Action } from '@ngrx/store';

export enum ActionTypes {
  Dummy = '[Redux:Todos] Dummy'
}

export class Dummy implements Action {
  readonly type = ActionTypes.Dummy;
  constructor(public payload: string) {}
}

export type ActionsUnion =
  | Dummy
;
