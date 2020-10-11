import {createAction, props} from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create todo', props<{ text: string }>());


export const toggle = createAction(
  '[TODO] Toggle todo', props<{ id: number }>());


export const editTodo = createAction(
  '[TODO] Edit todo', props<{id: number, text: string}>());

export const deleteTodo = createAction(
  '[TODO] Delete todo', props<{id: number}>());

export const activateAll = createAction(
  '[TODO] Activate todos',
  props<{completed: boolean}>());


export const clearCompleted = createAction(
  '[TODO] Clear todos completed');
