import {
  UserService
} from './user.service';
import {
  Observable
} from "rxjs/Observable";
import {
  AuthService
} from './auth.service';
import {
  CanActivate
} from '@angular/router';
import {
  Injectable
} from '@angular/core';
import {
  switchMap
} from 'rxjs/operators';
import {
  map
} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(({uid}) => {
        return this.userService.get(uid),
        map((user) => {
          user
        });
      })
    ); 
  }
}
