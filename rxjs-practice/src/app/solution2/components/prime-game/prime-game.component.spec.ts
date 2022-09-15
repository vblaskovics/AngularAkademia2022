import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeGameComponent } from './prime-game.component';

describe('PrimeGameComponent', () => {
  let component: PrimeGameComponent;
  let fixture: ComponentFixture<PrimeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
