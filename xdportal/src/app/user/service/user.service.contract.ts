
import { Observable } from 'rxjs';
import { ApiUrlConstants } from '../../shared/constants/api-constants';
import { User } from '../interface/user.interface';

export abstract class UserServiceContracts {
  UsersUrl = ApiUrlConstants.UserApiUrl;
  abstract getUseres (): Observable<User[]>;
  abstract getUser(id: number): Observable<User>;
  abstract addUser (user: User): Observable<User>;
  abstract deleteUser (user: User | number): Observable<User>;
  abstract searchUseres(term: string): Observable<User[]>;
  abstract updateUser (user: User): Observable<User>;
}
