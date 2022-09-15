import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { PhotoService } from '../services/photo.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-photo-count',
  templateUrl: './photo-count.component.html',
  styleUrls: ['./photo-count.component.css'],
})
export class PhotoCountComponent implements OnInit {

  user$: Observable<Photo[]> = new Observable();
  photoCount$: Observable<number>  = new Observable();


  constructor(
    private userService: UserService,
    private postService: PostService,
    private photoService: PhotoService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {}
}
