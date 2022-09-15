import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCountComponent } from './post-count.component';

describe('PostCountComponent', () => {
  let component: PostCountComponent;
  let fixture: ComponentFixture<PostCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
