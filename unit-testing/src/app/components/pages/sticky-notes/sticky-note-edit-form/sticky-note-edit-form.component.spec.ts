import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteEditFormComponent } from './sticky-note-edit-form.component';

describe('StickyNoteEditFormComponent', () => {
  let component: StickyNoteEditFormComponent;
  let fixture: ComponentFixture<StickyNoteEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
