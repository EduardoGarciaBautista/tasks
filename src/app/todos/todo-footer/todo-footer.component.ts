import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import {setFilter, validFilters} from '../../filter/filter.actions';
import {clearCompleted} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilters = 'todos';

  filters: validFilters[] = ['completed', 'todos', 'pending'];

  pendings = 0;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(({filter, todos}) => {
        this.actualFilter = filter;
        this.pendings = todos.filter(todo => !todo.completed).length;
      }
    );
  }

  changeFilter(filter: validFilters): void {

    this.store.dispatch(setFilter({filter}));
  }
  clearAll(): void {
    this.store.dispatch(clearCompleted());
  }
}
