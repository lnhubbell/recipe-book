import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }
  current = '';
  ngOnInit() {

  }

  @HostListener('click') toggleOpen(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.isOpen = !this.isOpen;
  }
}
