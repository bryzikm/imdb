import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error.component';
import {NotFoundComponent} from './views/not-found/not-found.component';

const ERROR_ROUTES: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ERROR_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class ErrorRouting {
}
