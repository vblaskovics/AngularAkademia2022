import { Component, OnInit } from '@angular/core';
import { StickNotesService } from './stick-notes.service';

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {

  constructor(public noteService: StickNotesService) { }

  ngOnInit(): void {
  }

  onDeleteAll(): void {
    this.noteService.deleteAllNotes()
  }

}
