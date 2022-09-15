import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  characters = "abcdefghijklmnopqrstuvwxyz"

  randomString: string;

  constructor() {
    this.randomString = this.generateRandomString(6)
  }

  ngOnInit(): void {
    console.log(this.generateRandomString(6));
  }

  generateRandomString(length: any) {
    const characters = this.characters;
    let result = '';

    for(let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random()*characters.length));
    }

    return result;
  }

}
