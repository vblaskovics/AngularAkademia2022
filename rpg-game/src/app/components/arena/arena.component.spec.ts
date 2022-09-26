import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaComponent } from './arena.component';

describe('ArenaComponent', () => {
  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start fight', () => {
    expect(component.startFight).toBeTruthy();
  });

  it('should get winner', () => {
    expect(component.getWinner).toBeTruthy();
  });

});
