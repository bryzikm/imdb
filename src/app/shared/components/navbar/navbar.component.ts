import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {logoutUser} from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<{}>) {
  }

  logoutUser() {
    this.store.dispatch(logoutUser());
  }
}
