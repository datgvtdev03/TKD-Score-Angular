import {Component, OnInit} from '@angular/core';
import {WebSocketSubject} from "rxjs/webSocket";


@Component({
  selector: 'app-display-snake',
  templateUrl: './display-snake.component.html',
  styleUrls: ['./display-snake.component.css']
})
export class DisplaySnakeComponent implements OnInit{
  remainingTime: number = 0;
  interval: any;

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(remainingSeconds).padStart(2, '0');
    return `${minutesString}:${secondsString}`;
  }

  startCountdown() {
    this.remainingTime = 200; // Thời gian đếm ngược, ví dụ 200 giây (3 phút 20 giây)
    this.interval = setInterval(() => {
      this.remainingTime--;

      if (this.remainingTime === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }


  startTime() {
    if (!this.interval) {
      this.startCountdown();
    }
  }

  stopTime() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  resetTime() {
    this.remainingTime = 0;
    this.stopTime();
  }


  private ws: WebSocketSubject<any> | undefined;
  count = 0;
  countBlue = 0;


  ngOnInit() {
    // Kết nối đến server WebSocket
    this.ws = new WebSocketSubject('ws://10.10.66.95:3000');

    // Nhận thông tin về biến count từ server
    this.ws.subscribe((data) => {
      this.count = data.count;
      this.countBlue = data.countBlue;
    });
  }

}
