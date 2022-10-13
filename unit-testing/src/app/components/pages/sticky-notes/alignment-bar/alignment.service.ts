import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlignmentService {

  horizontalAlignment: string = 'center'
  verticalAlignment: string = 'top'

  constructor() { }

  // getHorizontalALignment(): string {
  //   return this.horizontalAlignment
  // }
  // getVerticalALignment(): string {
  //   return this.verticalAlignment
  // }
}
