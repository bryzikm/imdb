import {MovieComponent} from './movie.component';
import {MovieListComponent} from './views/movie-list/movie-list.component';
import {MovieDetailsComponent} from './views/movie-details/movie-details.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: ':imdbId',
        component: MovieDetailsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIE_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class MovieRouting {
}
