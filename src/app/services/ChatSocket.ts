import {Injectable} from "@angular/core";
import {Socket} from "socket.io";
import {DefaultEventsMap} from "socket.io/dist/typed-events";
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root',
})
export class ChatSocket {

  static io: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;

  constructor() {

  }

  public connect() {
    ChatSocket.io = io("ws://localhost:3000", { transports: ['webSocket']}) as any;
  }

  public disconnect() {
    ChatSocket.io!.disconnect();
  }

}

export default ChatSocket.io;
