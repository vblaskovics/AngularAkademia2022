import { Observable, Subject } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { User } from 'src/app/models/user.model';

export interface HttpServiceInterface {
  BASE_URL: string;
  usersUpdated: Subject<boolean>;

  getUsers(): Observable<User[]>;

  postUser(user: UserDto): Observable<UserDto>;

  deleteUser(id: number): Observable<void>;
}
