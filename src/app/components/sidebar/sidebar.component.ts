import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public globalService: GlobalService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  public test() {
    this.auth.auth.user.subscribe(console.log);
    this.auth.auth.credential.subscribe(console.log);
    this.auth.auth.idToken.subscribe(console.log);
  }

  public setActive(selected: number): void {
    selected !== this.globalService.slectedSidebarAction ?
    this.globalService.slectedSidebarAction = selected : this.globalService.slectedSidebarAction = -1;
  }

}
