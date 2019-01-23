import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appContentEditable]'
})
export class ContentEditableDirective {
  @Input() appContentEditable: boolean;

  @Input() appContentEditableClass: string;

  @Output() appContentEditableChange = new EventEmitter<string>();

  private element: HTMLElement;

  private textContent: string = null;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('click') onClick() {
    if (this.appContentEditable) {
      this.startEdit();
    }
  }

  @HostListener('blur') onBlur() {
    this.stopEdit();
  }

  @HostListener('keydown.enter') onKeydownEnter() {
    this.element.blur();
  }

  @HostListener('keydown.esc') onKeydownEsc() {
    this.element.textContent = this.textContent;
    this.element.blur();
  }

  private startEdit() {
    this.textContent = this.element.textContent;

    if (this.appContentEditableClass) {
      this.element.classList.add(this.appContentEditableClass);
    }
    this.element.contentEditable = 'true';
    this.element.focus();
  }

  private stopEdit() {
    if (this.element.textContent !== this.textContent) {
      this.appContentEditableChange.emit(this.element.textContent);
    }
    this.textContent = null;

    if (this.appContentEditableClass) {
      this.element.classList.remove(this.appContentEditableClass);
    }
    this.element.contentEditable = 'false';
  }
}