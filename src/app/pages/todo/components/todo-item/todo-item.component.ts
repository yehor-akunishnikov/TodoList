import {
  ChangeDetectionStrategy, Component,
  EventEmitter, Input, Output
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() name = '';
  @Input() status = false;
  @Input() disabled = false;

  @Output() clickCheckbox = new EventEmitter<void>();
  @Output() clickDelete = new EventEmitter<void>();
  @Output() clickEdit = new EventEmitter<void>();

  public onCheckboxClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.clickCheckbox.emit();
  }

  public onDeleteClick(): void {
    this.clickDelete.emit();
  }

  public onEditClick(): void {
    this.clickEdit.emit();
  }
}
