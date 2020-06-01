import {
  Observable
} from 'rxjs';
import {
  AngularFireAuth
} from 'angularfire2/auth';
import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase';
import {
  ActivatedRoute
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable < firebase.User >

    constructor(private auth: AngularFireAuth, private route: ActivatedRoute) {
      this.user$ = auth.authState;
    }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl)
    this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut();
  }

}
