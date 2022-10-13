import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { BlackBoxComponent } from './components/pages/black-box/black-box.component';
import { BlackBoxesComponent } from './components/pages/black-boxes/black-boxes.component';
import { StickyNotesComponent } from './components/pages/sticky-notes/sticky-notes.component';
import { StickyNoteEditFormComponent } from './components/pages/sticky-notes/sticky-note-edit-form/sticky-note-edit-form.component';
import { AccordionPageComponent } from './components/pages/accordion-page/accordion-page.component';
import { GridExampleComponent } from './components/pages/grid-example/grid-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard], children: [
    { path: 'task1', component: BlackBoxComponent },
    { path: 'task2', component: BlackBoxesComponent },
    { path: 'sticky-notes', component: StickyNotesComponent },
    { path: 'sticky-notes/edit/:id', component: StickyNoteEditFormComponent },
    { path: 'accordion', component: AccordionPageComponent },
    { path: 'grid-example', component: GridExampleComponent },
  ] },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
