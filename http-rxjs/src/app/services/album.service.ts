import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../interfaces/ialbum';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private API = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}
  getAlbumsByUserId(id: number): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.API + `?userId=${id}`);
  }
}
