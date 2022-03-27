import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(public auth: AngularFireAuth) {}
  
  public GoogleAuth(): Promise<void> {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  
  private AuthLogin(provider: GoogleAuthProvider): Promise<void> {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
