import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {SpinnerState} from '../../../store/spinner/spinner.reducer';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isVisible$ = this.store.select(state => state.spinner.isVisible);

  constructor(private store: Store<{spinner: SpinnerState}>) { }
}
