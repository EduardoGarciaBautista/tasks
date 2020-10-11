import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;

  @ViewChild('input') txtInput: ElementRef;

  chkCompleted: FormControl;
  txtEdit: FormControl;

  isEditing: boolean;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      console.log(value);
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  edit(): void {
    this.isEditing = true;
    this.txtEdit.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInput.nativeElement.select();
    }, 1);
  }

  finishEdit(): void {
    this.isEditing = false;
    if (this.txtEdit.invalid) {
      return;
    }
    if (this.txtEdit.value === this.txtInput) {
      return;
    }
    this.store.dispatch(actions.editTodo({
      id: this.todo.id,
      text: this.txtEdit.value
    }));
  }

  deleteTodo(): void {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }
}
