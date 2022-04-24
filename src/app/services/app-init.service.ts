import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private auth: AngularFireAuth, private globalService: GlobalService) { }

  public async init(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.globalService.userData = await firstValueFrom(this.auth.authState);
      resolve(true);
    });
  }
}
