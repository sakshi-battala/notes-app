import { Injectable, signal } from '@angular/core';
import { UserDetails } from '../models/user';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<User | null>(null);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      console.log(user);
      this.user.set(user);
    });
  }

  //signup
  signup(user: UserDetails) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  //login
  login(user: UserDetails) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  //logout
  logout() {
    return signOut(this.auth);
  }
}
