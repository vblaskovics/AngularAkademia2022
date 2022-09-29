import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { IAlbum } from 'src/app/interfaces/ialbum';
import { IPhoto } from 'src/app/interfaces/iphoto';
import { IUser } from 'src/app/interfaces/IUser';
import { AlbumService } from 'src/app/services/album.service';
import { ImageService } from 'src/app/services/image.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feladat4',
  templateUrl: './feladat4.component.html',
  styleUrls: ['./feladat4.component.scss'],
})
export class Feladat4Component implements OnInit {
  photoURL$: Observable<string>;
  constructor(
    private userService: UserService,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) {
    this.photoURL$ = userService.getUserByEmail('Sincere@april.biz').pipe(
      switchMap((user: IUser) => this.albumService.getAlbumsByUserId(user.id)),
      switchMap((albums: IAlbum[]) => {
        let randomAlbum = Math.round(Math.random() * albums.length + 1);

        return this.photoService.getPhotosByAlbumId(randomAlbum);
      }),
      map((photos: IPhoto[]) => {
        let randomPhoto = Math.round(Math.random() * photos.length + 1);
        return photos[randomPhoto].url;
      }),
      tap((x) => console.log(x))
    );
  }

  ngOnInit(): void {}
}
