import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
