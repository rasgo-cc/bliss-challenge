import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-noconnectivity',
  templateUrl: './noconnectivity.component.html',
  styleUrls: ['./noconnectivity.component.css']
})
export class NoconnectivityComponent implements OnInit {

  online$: Observable<boolean>;

  constructor() {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    )
  }

  ngOnInit() {
    this.online$.subscribe();
  }

}
