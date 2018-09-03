import { UserServiceContracts } from './user.service.contract';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from '../interface/user.interface';


@Injectable({
  providedIn: 'root',
})
export class UserService extends UserServiceContracts {

    constructor(private http: HttpClient) {
        super();
    }

    /**
     * Get Users List
     * @returns {Observable<Hero>}
     * @memberof UserService
     */
    getUseres(): Observable<User[]> {
        return this.http.get<User[]>(this.UsersUrl);
    }

    /**
     * Get User By Id
     * @param {number} id
     * @returns {Observable<User>}
     * @memberof UserService
     */
    getUser(id: number): Observable<User> {
        const url = `${this.UsersUrl}/${id}`;
        return this.http.get<User>(url);
    }

    /**
     * Add New User
     * @param {User} user
     * @returns
     * @memberof UserService
     */
    addUser(user: User) {
        return this.http.post<User>(this.UsersUrl, user);
    }

    /**
     * Delete User
     * @param {User} user
     * @returns
     * @memberof UserService
     */
    deleteUser(user: User) {
        const url = `${this.UsersUrl}/${user.id}`;
        return this.http.delete<User>(url);
    }

    searchUseres(term: string): Observable<User[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<User[]>(`${this.UsersUrl}/?name=${term}`);
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(this.UsersUrl, user);
    }
}
