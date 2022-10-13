import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StickyNote } from '../models/sticky-note.model';
import { StickNotesService } from '../stick-notes.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sticky-note-form',
  templateUrl: './sticky-note-form.component.html',
  styleUrls: ['./sticky-note-form.component.scss']
})
export class StickyNoteFormComponent implements OnInit {

  stickyForm: FormGroup

  constructor(fb: FormBuilder, private noteService: StickNotesService) { 
    this.stickyForm = fb.group({
      stickyTitle: ['', [Validators.required]],
      stickyNote: ['', []]
    })
  }

  ngOnInit(): void {
  }

  onSubmitStickyNote(): void {
    if(this.stickyForm.valid) {
      let stickyNote: StickyNote = {...this.stickyForm.value};
      stickyNote.id = uuidv4()
      console.log(stickyNote.id)
      console.log(stickyNote)
      this.noteService.addNote(stickyNote)
    }
    console.log(this.noteService.stickyNotes)
  }

}
