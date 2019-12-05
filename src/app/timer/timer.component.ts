import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/observable/interval';

const observable = new Observable(subscriber => {
  let i = 1
  setInterval(() => subscriber.next( i++), 1000)
 })
 observable.subscribe(
  event => console.log(event),
 ) 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timeLeft: number = 30;
  timeDown: boolean = false;
  interval;

  constructor() { }

  ngOnInit() {
    const counter = observable.subscribe();
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeDown = true;
      }
    },1000)
  }

}
