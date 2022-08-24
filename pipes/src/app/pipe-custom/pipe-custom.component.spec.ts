import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomComponent } from './pipe-custom.component';

describe('PipeCustomComponent', () => {
  let component: PipeCustomComponent;
  let fixture: ComponentFixture<PipeCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
