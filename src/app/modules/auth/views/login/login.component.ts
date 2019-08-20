import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {loginUser} from '../../../../store/auth/auth.actions';
import {showSpinner} from '../../../../store/spinner/spinner.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.initFormGroup();

  constructor(private formBuilder: FormBuilder,
              private store: Store<{}>) {
  }

  ngOnInit() {
  }

  loginUser({value}) {
    this.store.dispatch(showSpinner());
    this.store.dispatch(loginUser({login: value.login, password: value.password}));
  }

  private initFormGroup() {
    return this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
