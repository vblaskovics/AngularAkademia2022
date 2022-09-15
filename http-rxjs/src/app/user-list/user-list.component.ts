import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Posts } from '../model/posts';
import { AlbumService } from '../services/album.service';
import { PhotoService } from '../services/photo.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>;
  posts!: Observable<Posts>;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private photoService: PhotoService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
