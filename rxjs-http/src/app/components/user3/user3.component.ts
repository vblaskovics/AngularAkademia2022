import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { User } from 'src/app/models/user.model';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {

  user$: Observable<User[]> = new Observable();

  album$: Observable<Album[]> = new Observable();

  photo$: Observable<Photo[]> = new Observable();

  constructor(private userService: UserService, private albumService: AlbumService, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.user$ = timer(0, 3000).pipe(
      switchMap(() => this.userService.getUserByEmail('Shanna@melissa.tv'))
      );

    this.album$ = this.user$.pipe(
      switchMap((users) => this.albumService.getAlbumsByUserId(users[0]?.id))
    );

    this.photo$ = this.album$.pipe(
      switchMap((albums) => this.photoService.getPhotosByAlbumId(albums[0]?.id))
    );

  }

}
