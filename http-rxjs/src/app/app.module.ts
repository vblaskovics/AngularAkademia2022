import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Feladat1Component } from './pages/feladat1/feladat1.component';
import { Feladat2Component } from './pages/feladat2/feladat2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Feladat22Component } from './feladat22/feladat22.component';
import { Feladat222Component } from './components/feladat222/feladat222.component';
import { Feladat3Component } from './pages/feladat3/feladat3.component';
import { Feladat4Component } from './pages/feladat4/feladat4.component';
import { Feladat5Component } from './pages/feladat5/feladat5.component';
@NgModule({
  declarations: [AppComponent, UserListComponent, Feladat1Component, Feladat2Component, NavbarComponent, Feladat22Component, Feladat222Component, Feladat3Component, Feladat4Component, Feladat5Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
