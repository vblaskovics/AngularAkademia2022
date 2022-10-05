import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'
import { TextComponentComponent } from "./components/text-component/text-component.component";


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: DebugElement

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, TextComponentComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement      
    })


    it('should create the component', () => {
        expect(component).toBeTruthy();
    })

    it('should render display text', () => {
        component.historyLog = 'Test value';
        fixture.detectChanges();
        let textContainer = el.query(By.css('#textContainer'));
        expect(textContainer.nativeElement.textContent).toContain('Test value')
    })
});