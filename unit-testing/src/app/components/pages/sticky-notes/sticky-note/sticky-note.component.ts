import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlignmentService } from '../alignment-bar/alignment.service';
import { StickyNote } from '../models/sticky-note.model';
import { StickNotesService } from '../stick-notes.service';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input() note?: StickyNote

  constructor(public alignmentService: AlignmentService, private noteService: StickNotesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  editNote(id: string): void {
    this.router.navigate([`edit/${id}`], {relativeTo: this.route})
  }

  deleteNote(id: string): void {
    this.noteService.deleteNote(id)
  }
}
