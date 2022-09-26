import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component"
import { TextDisplayComponent } from "./components/text-display/text-display.component";



describe('AppComponent',() => {

  let component: AppComponent
  let component2: TextDisplayComponent
  let fixture: ComponentFixture<AppComponent>;
  let fixture2: ComponentFixture<TextDisplayComponent>;
  let el2: DebugElement;
  let el: DebugElement;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent, TextDisplayComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      fixture2 = TestBed.createComponent(TextDisplayComponent);
      component = fixture.componentInstance;
      component2 = fixture2.componentInstance;
      el = fixture.debugElement;
      el2 = fixture2.debugElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
        expect(component2).toBeTruthy();
    });

    it('should render display text', () => {
      component2.textToDisplay = 'Test Value';
      fixture.detectChanges();
      fixture2.detectChanges();
      let textContainer = el2.query(By.css('#textContainer'));

      expect(textContainer.nativeElement.textContent).toBe(' Test Value ' );
    });
})
