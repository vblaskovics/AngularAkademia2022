import { Component, OnInit } from '@angular/core';
import { AlignmentService } from '../alignment-bar/alignment.service';
import { StickNotesService } from '../stick-notes.service';

@Component({
  selector: 'app-sticky-notes-list',
  templateUrl: './sticky-notes-list.component.html',
  styleUrls: ['./sticky-notes-list.component.scss']
})
export class StickyNotesListComponent implements OnInit {

  constructor(public noteService: StickNotesService, public alignmentService: AlignmentService) { }

  ngOnInit(): void {
  }

}
