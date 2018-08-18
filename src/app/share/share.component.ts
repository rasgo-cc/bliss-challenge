import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  destinationEmail: string;

  constructor(
    private shareService: ShareService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

  }

  share(): void {
    const url = 'http://localhost:4200' + this.router.url;
    console.log('share', url);
    this.shareService.share(this.destinationEmail, url)
                     .subscribe(obj => {
                        console.log('shared', obj);
                     })
  }

}
