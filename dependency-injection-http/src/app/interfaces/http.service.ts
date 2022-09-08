import { Observable, Subject } from 'rxjs';
import { UserDto } from '../models/user.dto';
import { User } from '../models/user.model';

export interface HttpServiceInterface {
  BASE_URL: string;
  usersUpdated: Subject<boolean>;

  fetchUsers(): Observable<User[]>;

  postUser(user: UserDto): Observable<UserDto>;
  deleteUser(id: number): Observable<void>;
}
