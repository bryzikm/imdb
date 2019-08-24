import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {
    path: 'video',
    loadChildren: './modules/video/video.module#VideoModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    loadChildren: './modules/error/error.module#ErrorModule'
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
