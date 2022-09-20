import { Observable, switchMap, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { PhotoService } from '../services/photo.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { Photo } from '../model/photo';
import { Album } from '../model/album';
import { User } from '../model/user';

const userEmail = "Nathan@yesenia.net";

@Component({
  selector: 'app-photo-count',
  templateUrl: './photo-count.component.html',
  styleUrls: ['./photo-count.component.css'],
})
export class PhotoCountComponent implements OnInit {
  photoUrl$: Observable<string> = new Observable();
  user$: Observable<Photo[]> = new Observable();
  photoCount$: Observable<number>  = new Observable();


  constructor(
    private userService: UserService,
    private postService: PostService,
    private photoService: PhotoService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // this.photoUrl$ = this.userService.getUsersByEmail(userEmail).pipe(
    //   switchMap((users: User[]) =>
    //     this.albumService.getAlbumsByUserId(this.getRandomUserId(users))),
    //   switchMap((albums: Album[]) =>
    //     this.photoService.getPhotoByAlbumId(this.getRandomAlbumId(albums))),
    //   map((photos: Photo[]) => this.getRandomPhotoUrl(photos))
    // )}
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
