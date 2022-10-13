import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotesListComponent } from './sticky-notes-list.component';

describe('StickyNotesListComponent', () => {
  let component: StickyNotesListComponent;
  let fixture: ComponentFixture<StickyNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNotesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
