import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/login/form/form.component';
import { FooterComponent } from './components/login/footer/footer.component';
import { HeaderComponent } from './components/login/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CaurselComponent } from './components/dashboard/caursel/caursel.component';
import { CardsComponent } from './components/dashboard/cards/cards.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterDashboardComponent } from './components/dashboard/footer/footer-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    CaurselComponent,
    CardsComponent,
    LoginComponent,
    DashboardComponent,
    FooterDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
