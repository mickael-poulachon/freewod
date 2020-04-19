import {Component, OnInit} from '@angular/core';
import {WodService} from '../../services/wod.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.scss']
})
export class WodComponent implements OnInit {

  wod: any = {};
  wodId;

  constructor(private wodService: WodService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.wodId = this.route.snapshot.params.id;
    this.wod = this.wodService.getWod(this.wodId);
  }

}
