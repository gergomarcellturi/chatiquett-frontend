import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

  public setActive(selected: number): void {
    selected !== this.globalService.slectedSidebarAction ?
    this.globalService.slectedSidebarAction = selected : this.globalService.slectedSidebarAction = -1;
  }

}
