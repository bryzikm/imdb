import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  text: string = 'SIGN_IN_SUCCESS';
  isFailure: boolean;
  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

}
