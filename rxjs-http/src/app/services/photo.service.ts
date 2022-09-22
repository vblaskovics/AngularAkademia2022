import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  API: string = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private http: HttpClient) { }

  getRandomAlbumPhoto(albumId: number): Observable<string> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).pipe(
      map(photos => {
        console.log(albumId)
        console.log(photos)
        let ids = photos.length
        let randomNumber = Math.floor(Math.random() * ids)
        console.log(photos[randomNumber])
        return photos[randomNumber].url
      })
    )
  }
}
