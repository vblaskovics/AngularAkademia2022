import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap, timer } from 'rxjs';
import { Album } from 'src/app/model/album';
import { User } from 'src/app/model/user';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.css'],
})
export class AlbumImageComponent implements OnInit {
  user$: Observable<User[]> = new Observable();
  albumCount$: Observable<number> = new Observable();

  constructor(
    private userService: UserService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.user$ = timer(0, 3000).pipe(
      switchMap(() =>
        this.userService.getUserByEmail('Lucio_Hettinger@annie.ca')
      )
    );

    this.albumCount$ = this.user$.pipe(
      switchMap((users) => this.albumService.getAlbumsByUserId(users[0]?.id)),
      map((albums) => albums.length)
    );

    
  }
}
