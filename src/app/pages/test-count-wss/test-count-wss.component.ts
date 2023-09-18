import {Component, OnInit} from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-test-count-wss',
  templateUrl: './test-count-wss.component.html',
  styleUrls: ['./test-count-wss.component.css']
})
export class TestCountWssComponent implements OnInit{
  private ws: WebSocketSubject<any> | undefined;
  count = 0;
  countBlue = 0;

  ngOnInit() {
    // Kết nối đến server WebSocket
    this.ws = new WebSocketSubject('ws://10.10.66.46:3000');

    // Nhận thông tin về biến count từ server
    this.ws.subscribe((data) => {
      this.count = data.count;
      this.countBlue = data.countBlue;
    });
  }

  incrementCount() {
    // Tăng biến count và gửi lại lên server
    this.count++;
    // @ts-ignore
    this.ws.next({ count: this.count });
  }

}
