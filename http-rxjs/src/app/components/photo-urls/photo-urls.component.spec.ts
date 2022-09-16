import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUrlsComponent } from './photo-urls.component';

describe('PhotoUrlsComponent', () => {
  let component: PhotoUrlsComponent;
  let fixture: ComponentFixture<PhotoUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoUrlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
