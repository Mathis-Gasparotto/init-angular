import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[entityBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5'
  private defaultColor: string = '#009688'
  private defaultHeight: number = 250

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor)
    this.setHeight(this.defaultHeight)
  }

  @Input('entityBorderCard') borderColor: string // alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}
