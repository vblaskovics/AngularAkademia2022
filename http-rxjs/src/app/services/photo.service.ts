import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getRandomPhoto() {
    return this.http.get<Photo[]>(`${this.API}`);
  }
}
