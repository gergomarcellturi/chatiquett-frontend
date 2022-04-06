import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public userData: any;

  public slectedSidebarAction: number = -1;
}
