import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCountComponent } from './photo-count.component';

describe('PhotoCountComponent', () => {
  let component: PhotoCountComponent;
  let fixture: ComponentFixture<PhotoCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
