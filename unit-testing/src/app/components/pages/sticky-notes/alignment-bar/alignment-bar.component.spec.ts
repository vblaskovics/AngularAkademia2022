import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentBarComponent } from './alignment-bar.component';

describe('AlignmentBarComponent', () => {
  let component: AlignmentBarComponent;
  let fixture: ComponentFixture<AlignmentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignmentBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignmentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
