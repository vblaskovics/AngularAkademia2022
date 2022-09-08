import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css'],
})
export class PlayerInputComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder, public player: PlayerService) {
    this.myForm = fb.group({
      userInput: [''],
    });
  }

  get userInput(): FormControl {
    return this.myForm.get('userInput') as FormControl;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.player.submitted === true) {
      return console.log('Már megadtad az értéket ide 1x');
    } else {
      if (this.userInput.value === this.player.helpingstring) {
        this.player.overallPoints++;
        this.userInput.reset();
        return (this.player.submitted = true);
      } else return (this.player.submitted = false);
    }
  }
}
