import { UserModel } from 'src/app/models/user.model';
import { UserDto } from 'src/app/models/user.dto';
import { Subject, Observable } from 'rxjs';

export interface HttpServiceInterface {
    BASE_URL: string;
    usersUpdated: Subject<boolean>,

    getUsers(): Observable<UserModel[]>;

    postUser(user:UserDto): Observable<UserDto>;

    deleteUser(id:number): Observable<void>;

}