import { HttpErrorHandlerInterceptor } from './utils/interceptors/http-error-handler.interceptor';
import { HttpService } from 'src/app/services/http.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockSeviceComponent } from './services/http-mock-sevice/http-mock-sevice.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ListComponent,
    HttpMockSeviceComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    // {
    //   provide: HttpService,
    //   useClass: HttpMockSeviceComponent,
    // }, - újra kell indítani a json servert, hogy működjön az app, mert ha ez nem élő, akkor hiba lesz a konzolon
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

//          \{^_^}/
