import { TestBed } from '@angular/core/testing';

import { StickNotesService } from './stick-notes.service';

describe('StickNotesService', () => {
  let service: StickNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a delete all notes function, that deletes all notes', ()=> {
    service.stickyNotes = [
      {stickyTitle: 'test stickTitle', stickyNote: 'valami note', id: '1234'},
      {stickyTitle: 'test stickTitle2', stickyNote: 'valami note2', id: '12345'},
    ]
    service.deleteAllNotes()
    expect(service.stickyNotes).withContext('Sticky notes list should be empty').toEqual([])   
  })

  it('should have a delete function, that delete an exact note from the list', ()=> {
    service.stickyNotes = [
      {stickyTitle: 'test stickTitle', stickyNote: 'valami note', id: '1234'},
      {stickyTitle: 'test stickTitle2', stickyNote: 'valami note2', id: '12345'},
    ]
    service.deleteNote('1234');
    expect(service.stickyNotes).withContext('The deleted note should be removed from the list').toEqual([{stickyTitle: 'test stickTitle2', stickyNote: 'valami note2', id: '12345'}])
    expect(service.stickyNotes.length).withContext('The length of the sticky notes list should be').toEqual(1)
  })

  it('should have an edit note function, that edits a note from the list', ()=> {
    service.stickyNotes = [
      {stickyTitle: 'test stickTitle', stickyNote: 'valami note', id: '1234'},
      {stickyTitle: 'test stickTitle2', stickyNote: 'valami note2', id: '12345'},
    ];
    service.editNote('1234', 'changed Title', 'changed Note');
    expect(service.stickyNotes[0]).withContext('the note with id: 1234 should be edited').toEqual({stickyTitle: 'changed Title', stickyNote: 'changed Note', id: '1234'})
  })
});
