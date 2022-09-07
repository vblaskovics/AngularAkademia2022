import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { HttpMockService } from './services/mock-services/http-mock.service';
import { HttpErrorHandlerInterceptor } from './utils/interceptors/http-error-handler.interceptor';

@NgModule({
  declarations: [AppComponent, BasicFormComponent, ListComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    /* { provide: HttpService, useClass: HttpMockService }, */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
