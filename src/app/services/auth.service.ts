import { Injectable } from '@angular/core';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(public auth: AngularFireAuth) {}
  
  public googleAuth(): Promise<void> {
    return this.authLogin(new GoogleAuthProvider());
  }

  public facebookAuth(): Promise<void> {
    return this.authLogin(new FacebookAuthProvider());
  }

  public signOut(): void {
    this.auth.signOut().then().catch();
  }
  
  private authLogin(provider: GoogleAuthProvider | FacebookAuthProvider): Promise<void> {
    return this.auth
      .signInWithRedirect(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}