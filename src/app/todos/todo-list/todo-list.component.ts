import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducer';
import {validFilters} from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoModel[] = [];

  filter: validFilters;

  constructor(private state: Store<IAppState>) {
    state.subscribe(({filter, todos}) => {
      this.todoList = todos;
      this.filter = filter;
    });
  }

  ngOnInit(): void {
  }

}
