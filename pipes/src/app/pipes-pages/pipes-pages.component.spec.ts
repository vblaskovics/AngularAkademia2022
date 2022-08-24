import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPagesComponent } from './pipes-pages.component';

describe('PipesPagesComponent', () => {
  let component: PipesPagesComponent;
  let fixture: ComponentFixture<PipesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
