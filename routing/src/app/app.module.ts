import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, LoginComponent],

  imports: [BrowserModule,
            RouterModule.forRoot(routes)
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
