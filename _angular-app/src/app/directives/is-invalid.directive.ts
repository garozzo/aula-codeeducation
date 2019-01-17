import { Directive, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[IsInvalid]'
})
export class IsInvalidDirective {

  constructor(private element: ElementRef, private control: NgControl) { }

  ngOnInit() {
    toogleClassInvalid(this.control, this.element.nativeElement);
    /*
    this.control.valueChanges.subscribe(() => {
      const nativeElement: HTMLElement = this.element.nativeElement;
      if(this.control.invalid && (this.control.dirty || this.control.touched)) {
        if(!nativeElement.classList.contains('is-invalid')) {
          nativeElement.classList.add('is-invalid');
        }
      } else {
        nativeElement.classList.remove('is-invalid');
      }
    });
    */
  }

}

@Directive({
  selector: '[IsInvalidControl]'
})
export class IsInvalidControlDirective {

  control: NgControl;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    toogleClassInvalid(this.control, this.element.nativeElement);
  }

  @Input()
  set IsInvalidControl(value) {
    this.control = value;
  }

}

function toogleClassInvalid(control: NgControl, nativeElement: HTMLElement) {
    control.valueChanges.subscribe(() => {
      if(control.invalid && (control.dirty || control.touched)) {
        if(!nativeElement.classList.contains('is-invalid')) {
          nativeElement.classList.add('is-invalid');
        }
      } else {
        nativeElement.classList.remove('is-invalid');
      }
    });
}
