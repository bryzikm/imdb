import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {NotificationState} from '../../../store/notification/notification.reducer';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  spinner$ = this.store.select(state => state.notification);

  constructor(private store: Store<{notification: NotificationState}>) { }
}
