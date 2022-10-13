
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player-interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  form: FormGroup

  constructor(fb: FormBuilder, private playerService: PlayerService) { 
    this.form = fb.group({
      name: ['', Validators.required],
      shirtNumber: ['', Validators.required],
      team: ['', Validators.required],
      age: ['', Validators.required],
      wage: ['', Validators.required],
      endOfContract: ['', Validators.required],
    })
  }

  get name(): FormControl{
    return this.form.get('name') as FormControl
  }

  get shirtNumber(): FormControl{
    return this.form.get('shirtNumber') as FormControl
  }

  get team(): FormControl{
    return this.form.get('team') as FormControl
  }

  get age(): FormControl{
    return this.form.get('age') as FormControl
  }

  get wage(): FormControl{
    return this.form.get('wage') as FormControl
  }

  get endOfContract(): FormControl{
    return this.form.get('endOfContract') as FormControl
  }

  ngOnInit(): void {
  }

  // onSubmit(player:Player){
  //   this.playerService.savePlayer(player);
  // }

  onSubmit(){ 
    this.playerService.savePlayer(this.form.value)
  }



}
