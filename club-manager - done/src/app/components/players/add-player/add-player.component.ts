import { ActivatedRoute, Router } from '@angular/router';

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

  form: FormGroup;

  newPlayer: Player = new Player();
  player!: Player;
  currentId!: number;


  constructor(fb: FormBuilder, private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.form = fb.group({
      id: [Number],
      name: ['', Validators.required],
      shirtNumber: ['', Validators.required],
      team: ['', Validators.required],
      age: ['', Validators.required],
      wage: ['', Validators.required],
      endOfContract: ['',[ Validators.required]],
    });
    this.currentId = activatedRoute.snapshot.params['id'];
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
    if (this.currentId == 0) {
      this.player = this.newPlayer;
    } else {
      this.player = this.playerService.getPlayersFromLSByID(this.currentId);

      const { id, name, shirtNumber, team, age, wage, endOfContract } = this.player;
      this.form.patchValue({
        id, name, shirtNumber, team, age, wage, endOfContract
      })
    }

  }

  
  onSubmit(){ 
    let savedPlayer: Player = this.form.value as Player;
    if (this.currentId == 0) {
      this.playerService.addingNewPlayer(savedPlayer);
    } else {
      this.playerService.savePlayerToLS(savedPlayer);
    }
    this.router.navigate(['players']);
  }



}
