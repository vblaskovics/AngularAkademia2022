import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTableComponent } from './pipe-table.component';

describe('PipeTableComponent', () => {
  let component: PipeTableComponent;
  let fixture: ComponentFixture<PipeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
