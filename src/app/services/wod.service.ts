import {Injectable} from '@angular/core';
import wods from '../../assets/wods.json';

@Injectable({
  providedIn: 'root'
})
export class WodService {

  constructor() {
    console.log(wods);
  }

  getWod(id): any{
    return wods.find(element => element.id === id);
  }
}
