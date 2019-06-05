import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextTransform]'
})
export class TextTransformDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appTextTransform') appTextTransform = 'uppercase';

  @HostListener('focus') onFocus() {
    this.transformText();
  }

  @HostListener('blur') onBlur() {
    this.transformText();
  }

  @HostListener('change') onChange() {
    this.transformText();
  }

  constructor(private el: ElementRef) {}

  transformText() {
    const value = this.el.nativeElement.value as string;

    if (this.appTextTransform.toLowerCase() === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
      return;
    }

    this.el.nativeElement.value = value.toLowerCase();
  }
}
