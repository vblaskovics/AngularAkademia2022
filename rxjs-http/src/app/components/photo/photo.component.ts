import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AlbumsService } from 'src/app/services/albums.service';
import { HttpService } from 'src/app/services/http.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  randomPhotoUrl$: Observable<string> = new Observable<string>()

  constructor(private httpService: HttpService, private albumService: AlbumsService, private photoService: PhotoService ) { }

  ngOnInit(): void {
    this.randomPhotoUrl$ = this.httpService.getUserByEmail('Sincere@april.biz').pipe(
      switchMap((users) => this.albumService.getAlbumsByUser(users[0]?.id)),
      switchMap((albums) => {
        let randomNumber = this.getRandomNumber(albums.length)
        return this.albumService.getRandomAlbum(albums[randomNumber].id)
      }),
      switchMap(album => {
        return this.photoService.getRandomAlbumPhoto(album.id)
      })
    )
  }

  getRandomNumber(q: number): number {
    return Math.floor(Math.random() * q) 
  }

}
