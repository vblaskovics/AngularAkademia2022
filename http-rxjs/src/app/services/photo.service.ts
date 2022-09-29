import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/iphoto';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}
  getPhotosByAlbumId(id: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.API + `?albumId=${id}`);
  }
}
