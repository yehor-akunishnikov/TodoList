import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  @Output() clickAdd = new EventEmitter<string>();

  public name = '';

  public onAddClick(name: string): void {
    this.clickAdd.emit(name);
    this.name = '';
  }
}
