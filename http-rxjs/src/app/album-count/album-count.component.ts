import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { PhotoService } from '../services/photo.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-album-count',
  templateUrl: './album-count.component.html',
  styleUrls: ['./album-count.component.css'],
})
export class AlbumCountComponent implements OnInit {
  user$: Observable<Album[]> = new Observable();
  albumCount$: Observable<number> = new Observable();

  constructor(
    private userService: UserService,
    private postService: PostService,
    private photoService: PhotoService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {}
}
