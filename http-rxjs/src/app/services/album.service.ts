import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private API: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbumById() {
    return this.http.get<Album[]>(`${this.API}`);
  }
}
