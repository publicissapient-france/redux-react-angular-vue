import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-add',
  templateUrl: './ui-todo-add.component.html',
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
