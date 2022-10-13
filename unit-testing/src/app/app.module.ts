import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackBoxComponent } from './components/pages/black-box/black-box.component';
import { BlackBoxesComponent } from './components/pages/black-boxes/black-boxes.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { StickyNotesComponent } from './components/pages/sticky-notes/sticky-notes.component';
import { StickyNotesListComponent } from './components/pages/sticky-notes/sticky-notes-list/sticky-notes-list.component';
import { StickyNoteComponent } from './components/pages/sticky-notes/sticky-note/sticky-note.component';
import { StickyNoteFormComponent } from './components/pages/sticky-notes/sticky-note-form/sticky-note-form.component';
import { AlignmentBarComponent } from './components/pages/sticky-notes/alignment-bar/alignment-bar.component';
import { StickyNoteEditFormComponent } from './components/pages/sticky-notes/sticky-note-edit-form/sticky-note-edit-form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionPageComponent } from './components/pages/accordion-page/accordion-page.component';
import { GridExampleComponent } from './components/pages/grid-example/grid-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackBoxComponent,
    BlackBoxesComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    StickyNotesComponent,
    StickyNotesListComponent,
    StickyNoteComponent,
    StickyNoteFormComponent,
    AlignmentBarComponent,
    StickyNoteEditFormComponent,
    AccordionComponent,
    AccordionPageComponent,
    GridExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
