import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { DisplayAreaComponent } from "./components/display-area/display-area.component";
import { AppModule } from "./app.module";

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule]
            // declarations: [AppComponent, DisplayAreaComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render display text', () => {
        component.textToDisplay = 'Test value';
        fixture.detectChanges();
        let textContainer = el.query(By.css('#textContainer'));
       
        expect(textContainer.nativeElement.textContent).toBe(' Test value ');
    });

    it('should contain character selects', () => {
        const select1 = el.query(By.css('#char1'));
        expect(select1).toBeTruthy();
        const select2 = el.query(By.css('#char2'));
        expect(select2).toBeTruthy();
    });

});