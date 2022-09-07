import { UserModel } from './../../models/user.model';
import { Observable, Subject } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';

export interface HttpServiceInterface {
  BASE_URL: string;
  usersUpdated: Subject<boolean>;

  getUsers(): Observable<UserModel[]>

  postUser(user: UserDto): Observable<UserDto>

  deleteUser(id: number): Observable<void>
}