import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core'

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor(private el: ElementRef, private render: Renderer) {

  }

  @HostListener('mouseover') //Quando passar o mouse por cima
  darkenOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave') // Quando eu tirar o mouse de cima
  darkenOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%');

  }

}
