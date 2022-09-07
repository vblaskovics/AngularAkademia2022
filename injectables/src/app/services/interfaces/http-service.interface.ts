import { Observable, Subject } from "rxjs";
import { UserDTO } from "src/app/models/user.dto";
import { UserModel } from "src/app/models/user.model";

export interface HttpServiceInterface{
  BASE_URL: string;
  usersUpdated: Subject<boolean>;
  getUsers(): Observable<UserModel[]>;

  postUser(user: UserDTO):Observable<UserDTO>;

  deleteUser(id: number): Observable<void>;
}
