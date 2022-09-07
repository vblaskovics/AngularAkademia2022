import { TestBed } from '@angular/core/testing';

import { HttpErrorHandlerInterceptor } from './http-error-handler.interceptor';

describe('HttpErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorHandlerInterceptor = TestBed.inject(HttpErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
