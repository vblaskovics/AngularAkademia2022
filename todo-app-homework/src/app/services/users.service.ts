import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, map, Observable, of, tap } from 'rxjs';
import { USER } from '../Interfaces/user.interface';
import { mockUsers } from '../MockData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //users: USER[];
  users$ = new BehaviorSubject<USER[]>([]);
  constructor() {
    // this.users = mockUsers;

    this.users$.next(mockUsers);
  }
  getUserFromId(id: number): Observable<USER> {
    return this.users$.pipe(
      map((x: USER[]) => {
        return x.find((u: USER) => u.id == id)!;
      })
    );
  }
}
