import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-add',
  template: `
    <input
      type="text"
      [value]="text"
      (input)="emitText($event.target.value)">

    <button (click)="emitAdd()">Add</button>
  `,
  styleUrls: ['./ui-todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoAddComponent {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  @Output() add = new EventEmitter<string>();

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(this.text);
  }

  emitAdd() {
    this.add.emit(this.text);
    this.emitText('');
  }
}
