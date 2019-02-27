import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-add',
  template: `
    <div>
      <input
        class="text"
        placeholder="What needs to be done?"
        type="text"
        [value]="text"
        (input)="emitText($event.target.value)"
        (keydown.enter)="emitAdd()">

      <button
        class="add"
        (click)="emitAdd()">
        <fa-icon icon="plus"></fa-icon>
      </button>
    </div>
  `,
  styleUrls: ['./ui-todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoAddComponent {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  @Output() add = new EventEmitter<string>();

  emitText(text: string) {
    this.textChange.emit(text);
  }

  emitAdd() {
    this.add.emit(this.text);
    this.emitText('');
  }
}
