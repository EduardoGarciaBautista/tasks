import {createReducer, on} from '@ngrx/store';
import {setFilter, validFilters} from './filter.actions';

const initialState: validFilters = 'completed';

const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => filter)
);


export function FilterReducer(state, action): validFilters {
  return filterReducer(state, action);
}
