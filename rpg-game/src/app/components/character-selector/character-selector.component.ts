import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.scss'],
})
export class CharacterSelectorComponent implements OnInit {
  @Input() characters!: Character[];
  @Output() selectedCharacter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  handleOnChange(e: any) {
    this.selectedCharacter.emit(e.target.value);
  }
}
