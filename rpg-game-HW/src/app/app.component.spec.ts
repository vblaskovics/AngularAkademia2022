import { DisplayAreaComponent } from './components/display-area/display-area.component';

import { AppComponent } from './app.component';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', ()=>{

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>; // egyben tartja a component és az elementet
    let el: DebugElement; // el- fixture-ból kell elkérni, html element.

    beforeEach(async ()=>{                         //async await helyett: waitForAsync - angularos működés, az async await js-es
        await TestBed.configureTestingModule({
            declarations: [AppComponent, DisplayAreaComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;

    });

    it("should create the component", ()=>{
        expect(component).toBeTruthy(); //toBeTruthy azt nézi, hogy létrejött-e a komponens
    });

    it("should render display text", ()=>{
        component.historyText = "Test value";
        fixture.detectChanges(); // meg kell hivni, mert nem történik semmi változás
        let textContainer = el.query(By.css('#textContainer')); // az id egy css szelektor. Query- egyet ad vissza, QueryAll - mindent lekérdez

        expect(textContainer.nativeElement.textContent).toContain('Test value');
    })

})