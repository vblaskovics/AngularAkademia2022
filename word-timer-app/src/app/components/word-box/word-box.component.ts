import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-box',
  templateUrl: './word-box.component.html',
  styleUrls: ['./word-box.component.css'],
})
export class WordBoxComponent implements OnInit {
  randomWord: string = '';
  constructor() {}

  ngOnInit(): void {
    this.randomWord = this.generateRandomWord();
  }

  generateRandomWord(): string {
    let length = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    let result: string = '';
    let characters: string = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
