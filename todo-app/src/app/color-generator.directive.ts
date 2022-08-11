import { AfterContentInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorGenerator]'
})
export class ColorGeneratorDirective implements AfterContentInit {
  @HostListener('click') handleClick(){}
  constructor(private elementRef:ElementRef) {
   
   }
   ngAfterContentInit(){
    const itemValue = parseInt(this.elementRef.nativeElement.value.split(' ')[1])
    console.log(itemValue)
    if(itemValue % 2 == 0){
      this.elementRef.nativeElement.style.color = 'blue'
    }else{
      this.elementRef.nativeElement.style.color = 'red'

    }
   }
}
