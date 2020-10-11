import {Component, OnInit} from '@angular/core';
import {activateAll} from '../todo.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  constructor(private store: Store<IAppState>) {
  }

  completedAll = false;

  ngOnInit(): void {
  }

  activeAll(): void {
    this.completedAll = !this.completedAll;
    this.store.dispatch(activateAll({completed: this.completedAll}));
  }
}
