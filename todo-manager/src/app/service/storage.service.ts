import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  isSignedIn(): boolean {
    return localStorage.getItem("signed-in") == 'true';
  }

  signIn() {
    localStorage.setItem("signed-in", "true");
  }
}
