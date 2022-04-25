import {Component, OnInit} from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatiquett-frontend';
  socket = io("ws://localhost:3001", { transports : ['websocket'] });


  ngOnInit() {

    console.log('init');


    this.socket.emit('chatConnection', 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiR2VyZ8WRIE1hcmNlbGwgVHVyaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp6R2dlMTVfM1FVMWdnVHBNUnZJSEtDS1cwVVRRMC13MFdoclFGdD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jaGF0aXF1ZXR0IiwiYXVkIjoiY2hhdGlxdWV0dCIsImF1dGhfdGltZSI6MTY1MDg5NDc3NCwidXNlcl9pZCI6Im1UVURvU2pualNTWmZHOUhRWDJ0RTdhNEdkbzIiLCJzdWIiOiJtVFVEb1NqbmpTU1pmRzlIUVgydEU3YTRHZG8yIiwiaWF0IjoxNjUwODk4NDY5LCJleHAiOjE2NTA5MDIwNjksImVtYWlsIjoiZ2VyZ28ubWFyY2VsbC50dXJpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA5ODU4MzI3OTQ0MTA1NDY0OTI4Il0sImVtYWlsIjpbImdlcmdvLm1hcmNlbGwudHVyaUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.XvZnIK-idwEdLkFrIaczF2e_QC6XnvAX2PAUGf_CDJ6pN9W4cOa-2HPuHgQpN-1vKnWxPnAa8xWr_KpF42RW2mtdzRpKFMFLfswv3CltJ5RVF4iQZ3u2I63dsDonuFv8D-UefvbCfujZo3zXwXTkLQKN7bcbXYkBHCzDz89VMijCweZOrV8yEwALbYyXUgprBW7jlXdvS0E_d4Bl6_o43iy8-G8R3tzQ9wJfnfbO9_dOXUoEIou5FOvJ3naBQbmXSU8Rv3ASU9vWQj9xIO7-g1tgKFWIb7MhDRcqbE8ESfffOiR9aKKHBR-tDtbd8P4B442raUZk-0RdyLCuy22KNA')

    this.socket.on("messageListen", (...args) => {
      console.log(args)
    });
  }
}
