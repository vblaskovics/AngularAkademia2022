import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { CharacterSelectComponent } from './character-select.component';

import { of, BehaviorSubject } from 'rxjs';
import { Character } from 'src/app/interfaces/character';

describe('CharacterSelectComponent', () => {
  let component: CharacterSelectComponent;
  let fixture: ComponentFixture<CharacterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ CharacterSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character select with characters', () => {
    component.names$ = of(['test1', 'test2']);
    fixture.detectChanges();

    const select:HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select).withContext("select hasn't rendered").toBeTruthy();
    expect(select.options.length).withContext("select doesn't have enough options").toBe(2);
  });

  it('should set selected character by selection', async () => {
    // TODO: figure out how to test this
    pending();
    
    component.names$ = of(['test1', 'test2']);
    component.character$ = new BehaviorSubject<Character | null>(null);
    fixture.detectChanges();
    
    const select:HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.value = 'test2';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    component.character$.subscribe((character) => {
      console.log(character);
      expect(character?.name).withContext("character hasn't been set").toBe('test2');
    });


  });


});
