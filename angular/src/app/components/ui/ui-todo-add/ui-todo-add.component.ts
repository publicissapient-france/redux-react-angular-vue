import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-add',
  template: `
    <input
      type="text"
      [value]="text"
      (input)="emitText($event.target.value)"
      (keydown.enter)="emitAdd()">

    <button (click)="emitAdd()" [disabled]="disabled">
      <fa-icon icon="plus"></fa-icon>
    </button>
  `,
  styleUrls: ['./ui-todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoAddComponent {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  @Input() disabled = false;

  @Output() add = new EventEmitter<string>();

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(this.text);
  }

  emitAdd() {
    if (this.disabled) {
      return;
    }
    this.add.emit(this.text);
    this.emitText('');
  }
}
