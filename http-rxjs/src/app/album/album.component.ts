import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from '../services/photos.service';
import { UserService } from 'src/app/services/user.service';
import { Observable, switchMap, map } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { User } from '../models/user-model';
import { Album } from 'src/app/models/album';

const userEmail = "Nathan@yesenia.net";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  photoUrl$: Observable<string> = new Observable();
  constructor(private userService: UserService,
    private albumService: AlbumService,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoUrl$ = this.userService.getUsersByEmail(userEmail).pipe(
      switchMap((users: User[]) =>
        this.albumService.getAlbumsByUserId(this.getRandomUserId(users))),
      switchMap((albums: Album[]) =>
        this.photoService.getPhotosByAlbumId(this.getRandomAlbumId(albums))),
      map((photos: Photo[]) => this.getRandomPhotoUrl(photos))
    )
  }

  getRandomItem(arr: any[]): any {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getRandomUserId(users: User[]): number {
    return this.getRandomItem(users).id;
  }

  getRandomAlbumId(albums: Album[]): number {
    return this.getRandomItem(albums).id;
  }

  getRandomPhotoUrl(photos: Photo[]): string {
    return this.getRandomItem(photos).url;
  }

}