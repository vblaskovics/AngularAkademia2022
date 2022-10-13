import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StickNotesService } from '../stick-notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sticky-note-edit-form',
  templateUrl: './sticky-note-edit-form.component.html',
  styleUrls: ['./sticky-note-edit-form.component.scss']
})
export class StickyNoteEditFormComponent implements OnInit {

  editedStickyForm: FormGroup

  constructor(fb: FormBuilder, private noteService: StickNotesService, private route: ActivatedRoute, private router: Router) { 
    this.editedStickyForm = fb.group({
      editStickyTitle: ['', [Validators.required]],
      editStickyNote: ['', []]
    })
  }

  get editStickyTitle(): FormControl {
    return this.editedStickyForm.get('editStickyTitle') as FormControl
  }
  get editStickyNote(): FormControl {
    return this.editedStickyForm.get('editStickyNote') as FormControl
  }

  ngOnInit(): void {
    let note = this.noteService.stickyNotes?.find(note => note.id === this.route.snapshot.params['id'])
    this.editStickyTitle.setValue(note?.stickyTitle);
    this.editStickyNote.setValue(note?.stickyNote)
  }

  onEditStickyNote(): void {
    let id = this.route.snapshot.params['id']
    this.noteService.editNote(id, this.editStickyTitle.value, this.editStickyNote.value)
    this.router.navigate([`home/sticky-notes`])
  }

}
