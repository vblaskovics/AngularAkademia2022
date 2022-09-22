import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  API: string = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private http: HttpClient) { }

  getAlbumsByUser(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.API}?userId=${userId}`);
  }

  getRandomAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.API}/${id}`);
  }
}
