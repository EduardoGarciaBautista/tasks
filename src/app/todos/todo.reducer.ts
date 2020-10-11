import {createReducer, on} from '@ngrx/store';
import {activateAll, clearCompleted, createTodo, deleteTodo, editTodo, toggle} from './todo.actions';
import {TodoModel} from './models/todo.model';

const initialState: TodoModel[] = [];

const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, {text}) => [...state, new TodoModel(text)]),
  on(toggle, (state, {id}) =>
    state.map(todo => todo.id === id ?
      {...todo, completed: !todo.completed} : todo)),
  on(editTodo, (state, {id, text}) =>
    state.map(todo => todo.id === id ?
      {...todo, text} : todo)),
  on(deleteTodo, (state, {id}) =>
    state.filter(todo => todo.id !== id)),
  on(activateAll, (state, {completed}) => state.map((todo) => ({...todo, completed}))),
  on(clearCompleted, (state) => state.filter(todo => !todo.completed))
);

export function TodoReducer(state, action): Array<TodoModel> {
  return todoReducer(state, action);
}
