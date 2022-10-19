import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GamingComponent } from './gaming.component';


describe('Appcomonent', () => {
  let component: GamingComponent;
  let fixture: ComponentFixture<GamingComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should render display text', () => {
    component.textToDisplay = 'Test value';
    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'))

    expect(textContainer.nativeElement.textContent).toContain('Text value')
  })
});
