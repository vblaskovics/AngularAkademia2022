import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component"
import { AppModule } from './app.module';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>; // ezzel érjük el az angular által generált komponenst
  let el: DebugElement; // el - DOM elemre való hivatkozás, ezt is a fixture-ből kell elkérni = a ts és html-t is innen tudjuk elkérni

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule] // vagy helyette azt a modult, ami deklarálta az összes komponenst
      // declarations: [AppComponent, DisplayAreaComponent] //mindent oda kell adni a TestBed-nek, az összes hivatkozást, amit használnia kell (vagy imports: [AppModule])
    }).compileComponents(); // compile: ne csak létrehozza, fordítsa is le

    fixture = TestBed.createComponent(AppComponent); // ez uaz mint a TestBed.inject a service-nél, csak komponensekre
    component = fixture.componentInstance;
    el = fixture.debugElement; // ha odaadjuk a komponensnek, megjelenik-e a rendszerben
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // tehát létezik, nem marad undefined
  })

  it('should render display text', () => {
    component.historyText = 'Test value'; //ha változtatjuk az értékét, valóban változik-e a DOM-ban is - ts fájl változásait lehet itt módosítani
    fixture.detectChanges(); // ha ezt nem hívjuk meg, nincs változás (angular újrarenderelné a komponenst, ha változik, de most nekünk kell)
    let textContainer = el.query(By.css('#textContainer')); // query visszaadja az első elemet, ami illeszkedik az adott lekérdezésre - angularnak By fv.
    expect(textContainer.nativeElement.textContent).toContain('Test value'); // el tudjuk kérni az eredeti DOM elementet és megnézni, hogy ugyanaz-e a tartalma
  })



})
