import {Component, OnInit} from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

 // Import thư viện socket.io-client


@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css'],
})
export class SnakeComponent implements OnInit{


  // private socket$: WebSocketSubject<string> = webSocket('ws://192.168.0.186:3000'); // Thay bằng IP của máy chủ của bạn
  private socket$: WebSocketSubject<string> = webSocket('ws://10.10.66.72:3000'); // Thay bằng IP của máy chủ của bạn
  message: string = 'message';
  receivedMessage: string = '';

  constructor() {
    this.socket$.subscribe(
      (message) => {
        console.log(`Received: ${message}`);
        this.receivedMessage = message;
        console.log("recived: ", this.receivedMessage);

        // Gửi lại tin nhắn cho server sau khi nhận được
        // this.sendMessage(); // Bạn có thể xem xét cách khác để gửi lại nếu cần
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  sendMessage() {
    this.socket$.next(this.message);
    console.log(`Sent: ${this.message}`);
  }


  ngOnInit(): void {
    // this.startCountdown()
  }


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


}
