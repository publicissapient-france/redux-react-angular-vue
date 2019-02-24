import { RestService } from 'App/services/rest.service';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as todosActions from '../actions/todo.actions';

@Injectable()
export class TodosEffects {
  @Effect() load$ = this.actions$.pipe(
    ofType<todosActions.Load>(todosActions.ActionTypes.Load),
    switchMap(() => this.restService.getTodos()),
    map(todos => new todosActions.LoadSuccess(todos))
  );

  @Effect() add$ = this.actions$.pipe(
    ofType<todosActions.Add>(todosActions.ActionTypes.Add),
    switchMap(action => this.restService.addTodo(action.payload)),
    map(todo => new todosActions.AddSuccess(todo))
  );

  @Effect() update$ = this.actions$.pipe(
    ofType<todosActions.Update>(todosActions.ActionTypes.Update),
    switchMap(action => this.restService.updateTodo(action.payload).pipe(
      map(success => action.payload)
    )),
    map(todo => new todosActions.UpdateSuccess(todo))
  );

  @Effect() remove$ = this.actions$.pipe(
    ofType<todosActions.Remove>(todosActions.ActionTypes.Remove),
    switchMap(action => this.restService.removeTodo(action.payload).pipe(
      map(success => action.payload)
    )),
    map(todo => new todosActions.RemoveSuccess(todo))
  );

  constructor(
    private actions$: Actions,
    private restService: RestService
  ) {}
}
