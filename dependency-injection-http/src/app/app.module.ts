import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './services/http.service';
import { HttpMockService } from './services/mock-services/http-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HttpService, useClass: HttpMockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
