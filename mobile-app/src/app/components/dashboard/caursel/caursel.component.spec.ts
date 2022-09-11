import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaurselComponent } from './caursel.component';

describe('CaurselComponent', () => {
  let component: CaurselComponent;
  let fixture: ComponentFixture<CaurselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaurselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaurselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
