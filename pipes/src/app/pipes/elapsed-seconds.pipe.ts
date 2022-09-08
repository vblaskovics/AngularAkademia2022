import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedSeconds',
  pure: false,
})
export class ElapsedSecondsPipe implements PipeTransform, OnDestroy {
  myInterval: any;
  currentDate: any = new Date().getTime();
  constructor() {
    this.myInterval = setInterval(() => {
      this.currentDate = new Date().getTime();
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.myInterval);
  }
  calculateSeconds() {}
  transform(modifyDate: number, option?: string): string {
    let elapsedSeconds = Math.round((this.currentDate - modifyDate) / 1000);

    if (option == 'all') {
      let hours = Math.floor(elapsedSeconds / 3600);
      let minutes = Math.floor((elapsedSeconds - hours * 3600) / 60);
      let seconds = elapsedSeconds - hours * 3600 - minutes * 60;
      return `${hours}h:${minutes}m:${seconds}s`;
    } else {
      return `${elapsedSeconds}s`;
    }
  }
}
