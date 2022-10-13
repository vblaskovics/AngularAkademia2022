import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteFormComponent } from './sticky-note-form.component';

describe('StickyNoteFormComponent', () => {
  let component: StickyNoteFormComponent;
  let fixture: ComponentFixture<StickyNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
