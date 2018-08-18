import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  modalVisible = false;
  destinationEmail: string;
  @Input() urlToShare: string;

  constructor(
    private shareService: ShareService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

  }

  showModal(): void {
    this.modalVisible = true;
  }
  hideModal(): void {
    this.modalVisible = false;
  }

  share(event: any): void {
    event.target.textContent = 'Sending...';
    this.shareService.share(this.destinationEmail, this.urlToShare)
                     .subscribe(obj => {
                        if(obj['status'] == "OK") {
                          this.hideModal();
                        }
                     })
  }

}
