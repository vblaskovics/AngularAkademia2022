import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMockSeviceComponent } from './http-mock-sevice.component';

describe('HttpMockSeviceComponent', () => {
  let component: HttpMockSeviceComponent;
  let fixture: ComponentFixture<HttpMockSeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpMockSeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpMockSeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
