import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';
import { Health } from '../health';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  health: Health;

  constructor(
    private healthService: HealthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus(): void {
    this.health = undefined;
    this.healthService.getStatus().subscribe(health => {
      this.health = health;
      if(this.health.status === 'OK') {
        this.router.navigate(['questions']);
      }
    });
  }

}
