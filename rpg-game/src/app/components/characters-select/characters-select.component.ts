import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-characters-select',
  templateUrl: './characters-select.component.html',
  styleUrls: ['./characters-select.component.css']
})
export class CharactersSelectComponent implements OnInit {

  characters$: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([])

  @ViewChild('firstCharSelect') firstCharSelect!: ElementRef;
  @ViewChild('secondCharSelect') secondCharSelect!: ElementRef;

  isChar1Selected?: boolean = false;
  isChar2Selected?: boolean = false;

	char1?: Character | null
	char2?: Character | null

  constructor(private charService: CharacterService) {
  }
  
  ngOnInit(): void {
    this.charService.getCharacters().subscribe( chars=> {
      this.characters$.next(chars)
    })
    this.charService.char1?.subscribe(char => {
      this.char1 = char
    })
    this.charService.char2?.subscribe(char => {
      this.char2 = char
    })
    
  }

  onSelectFirstChar(): void {
    this.isChar1Selected = true
    this.char1 =  this.characters$.value.find(char => char.name = this.firstCharSelect.nativeElement.value);
    this.charService.char1?.next(this.char1!)
  }
  onSelectSecondChar(): void {
    this.isChar2Selected = true
    this.char2 =  this.characters$.value.find(char => char.name == this.secondCharSelect.nativeElement.value);
    this.charService.char2?.next(this.char2!)
  }

}
