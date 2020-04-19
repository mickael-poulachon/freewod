import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _actionSubject = new Subject<any>();

  constructor() {
    this._actionSubject.subscribe((action) => {
      console.log(action);
    });
  }

  get actionSubject(): Subject<any> {
    return this._actionSubject;
  }

  get actionObservable(): Observable<any>{
    return this._actionSubject.asObservable();
  }
}
