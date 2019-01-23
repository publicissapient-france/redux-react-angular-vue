import {
    ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

export interface State {
  foo: number;
}

export const reducers: ActionReducerMap<State> = {
  foo: () => 0
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
