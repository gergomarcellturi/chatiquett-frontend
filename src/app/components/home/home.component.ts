import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mockMessages = [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, tortor fermentum feugiat egestas, orci leo porttitor nunc, ultricies scelerisque mauris urna tempor ex.'},
    {id: 1, message: 'Etiam ipsum massa, fermentum dapibus maximus a, consequat fringilla urna. Nulla a arcu et orci tempus fringilla vitae sed nisl'},
    {id: 2, message: 'Ut ac aliquam mauris, vitae vestibulum ex. Curabitur sit amet mauris nec libero sagittis blandit. Donec dui ante, aliquet eget fringilla ut, pellentesque in nibh. Integer porttitor fringilla accumsan.'},
    {id: 1, message: 'Vivamus at tortor id dolor lacinia euismod.'},
    {id: 2, message: 'Suspendisse viverra hendrerit viverra.'},
    {id: 1, message: 'Aenean sed nibh sodales, lacinia orci ut, consectetur sapien. Ut interdum gravida est, at varius erat semper ut.'}
  ];

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
