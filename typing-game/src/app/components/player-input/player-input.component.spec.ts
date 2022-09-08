import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInputComponent } from './player-input.component';

describe('PlayerInputComponent', () => {
  let component: PlayerInputComponent;
  let fixture: ComponentFixture<PlayerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
