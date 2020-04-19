import {Component, OnInit} from '@angular/core';
import {TimerService} from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  interval: any = null;
  timeStart = new Date().setTime(0);
  countdown = 3;

  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {
    this.timerService.actionObservable.subscribe((action) => {
      switch (action) {
        case 'play':
          this.play();
          break;
        case 'stop':
          this.pauseTimer();
          this.timerService.actionSubject.next({time: this.timeStart});
          break;
        case 'pause':
          this.pauseTimer();
          break;
      }
    });
    this.startCountDown();
  }

  play() {
    this.interval = setInterval(() => {
      this.timeStart++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  startCountDown() {
    const startInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(startInterval);
        this.play();
      }
    }, 1000);
  }

}
