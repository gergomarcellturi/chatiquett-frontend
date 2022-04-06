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

    this.socket.emit("hello from client", 5, "6", {7: Uint8Array.from([8])});

    this.socket.on("hello from server", (...args) => {
      console.log(args)
    });
  }
}
