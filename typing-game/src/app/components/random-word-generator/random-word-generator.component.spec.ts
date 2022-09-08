import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordGeneratorComponent } from './random-word-generator.component';

describe('RandomWordGeneratorComponent', () => {
  let component: RandomWordGeneratorComponent;
  let fixture: ComponentFixture<RandomWordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomWordGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomWordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
