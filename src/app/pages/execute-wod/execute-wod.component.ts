import {Component, OnInit} from '@angular/core';
import {WodService} from '../../services/wod.service';
import {ActivatedRoute} from '@angular/router';
import {TimerService} from '../../services/timer.service';

@Component({
  selector: 'app-execute-wod',
  templateUrl: './execute-wod.component.html',
  styleUrls: ['./execute-wod.component.scss']
})
export class ExecuteWodComponent implements OnInit {

  wodId;
  wod;
  currentExercice;
  nextExercice;

  currentExerciceToShow = 0;
  nextExerciceToShow = 1;
  currentRound = 0;

  constructor(private wodService: WodService,
              private route: ActivatedRoute,
              private timerService: TimerService) {
  }

  ngOnInit(): void {
    this.wodId = this.route.snapshot.params.id;
    this.wod = this.wodService.getWod(this.wodId);
    this.currentExercice = this.wod.rounds[this.currentRound].mouvements[this.currentExerciceToShow];

    if (this.nextExerciceExist()) {
      this.nextExercice = this.getNextExcercice();
    }

    this.timerService.actionObservable.subscribe((action) => {
      if (action.time) {
        console.log('on a terminé');
      }
    });
  }

  goNextExercice() {
    this.currentExercice = this.nextExercice;
    this.nextExercice = this.getNextExcercice();
    if (!this.currentExercice) {
      console.log('TERMINE');
      this.timerService.actionSubject.next('stop');
    }
  }

  nextExerciceExist() {
    if (this.wod.rounds[this.currentRound].mouvements[this.nextExerciceToShow]) {
      return (this.wod.rounds[this.currentRound].mouvements[this.nextExerciceToShow]);
    } else if (this.wod.rounds[this.currentRound + 1]) {
      return (this.wod.rounds[this.currentRound + 1].mouvements[0]);
    } else {
      return false;
    }
  }

  getNextExcercice() {
    if (this.wod.rounds[this.currentRound].mouvements[this.nextExerciceToShow]) {
      this.nextExercice = this.wod.rounds[this.currentRound].mouvements[this.nextExerciceToShow];
      this.nextExerciceToShow++;
      return this.nextExercice;
    } else if (this.wod.rounds[this.currentRound + 1]) {
      this.nextExercice = this.wod.rounds[this.currentRound + 1].mouvements[0];
      this.currentRound++;
      this.nextExerciceToShow = 1;
      return this.nextExercice;
    } else {
      return false;
    }
  }
}
