import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css'],
})
export class SnakeComponent implements OnInit{
  remainingTime: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown()
  }

  startCountdown() {
    this.remainingTime = 200; // Thời gian đếm ngược, ví dụ 60 giây
    this.interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
