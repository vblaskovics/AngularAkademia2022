import { UserDto } from './../../models/user.dto';
import { Observable, Subject } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';


export interface HttpMockServiceInterface {
  BASE_URL: string;
  usersUpdated: Subject<boolean>;

  getusers(): Observable<UserModel[]>

  postUser(user: UserDto): Observable<UserDto>

  deleteUser(id: number): Observable<void>
}
