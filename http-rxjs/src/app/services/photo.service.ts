import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private API: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.API}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.API}?albumId=${albumId}`);
  }
}
