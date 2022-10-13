import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesComponent } from './wages.component';

describe('WagesComponent', () => {
  let component: WagesComponent;
  let fixture: ComponentFixture<WagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
