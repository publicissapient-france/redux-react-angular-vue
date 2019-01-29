import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-message',
  template: `
    <app-ui-todo-message
      [hiddenCategory]="todoService.hiddenCategory$ | async">
    </app-ui-todo-message>
  `
})
export class RxjsTodoMessageComponent {
  constructor(public todoService: RxjsTodoService) { }

}
