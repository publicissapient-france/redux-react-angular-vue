export enum FilterStatus {
  ALL,
  ACTIVE,
  COMPLETED
}

export interface Todo {
  id: number,
  done: boolean,
  text: string,
}

export interface State {
  todos: { [id: string]: Todo },
  filter: FilterStatus
}