import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePageComponent } from './pipe-page.component';

describe('PipePageComponent', () => {
  let component: PipePageComponent;
  let fixture: ComponentFixture<PipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
