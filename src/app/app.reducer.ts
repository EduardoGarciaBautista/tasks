import {TodoModel} from './todos/models/todo.model';
import {ActionReducerMap, combineReducers} from '@ngrx/store';
import {TodoReducer} from './todos/todo.reducer';
import {validFilters} from './filter/filter.actions';
import {FilterReducer} from './filter/filter.reducer';


export interface IAppState {
  todos: TodoModel[];
  filter: validFilters;
}

export const AppReducers: ActionReducerMap<IAppState> = {
  todos: TodoReducer,
  filter: FilterReducer,
};
