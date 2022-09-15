import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCountComponent } from './album-count.component';

describe('AlbumCountComponent', () => {
  let component: AlbumCountComponent;
  let fixture: ComponentFixture<AlbumCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
