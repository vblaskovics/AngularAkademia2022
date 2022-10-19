import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlahaComponent } from './blaha.component';

describe('BlahaComponent', () => {
  let component: BlahaComponent;
  let fixture: ComponentFixture<BlahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlahaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
