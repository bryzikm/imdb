import {Component} from '@angular/core';
import {Column} from '../../../../shared/components/table/models/column.model';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie.model';
import {MovieState} from '../../../../store/movie/movie.reducer';
import {Store} from '@ngrx/store';
import {showSpinner} from '../../../../store/spinner/spinner.actions';
import {getMovies} from '../../../../store/movie/movie.actions';
import {Router} from '@angular/router';
import {Filters} from '../../../../shared/components/table/models/filters.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  data$: Observable<Movie[]> = this.store.select(state => state.movie.moviesCollection.collection);
  total$: Observable<number> = this.store.select(state => state.movie.moviesCollection.total);
  readonly columns: Column[] = [
    {
      header: 'TITLE',
      isSortable: true,
      name: 'title'
    },
    {
      header: 'YEAR',
      isSortable: true,
      name: 'year'
    },
    {
      header: 'META_SCORE',
      isSortable: true,
      name: 'metascore'
    }
  ];
  readonly limitOptions = [2, 5, 10, 25];

  constructor(private store: Store<{ movie: MovieState }>,
              private router: Router) {
  }

  showMovieDetails(movie: Movie): void {
    this.router.navigate(['/movie', movie.imdbId]);
  }

  onFiltersChange(filters: Filters) {
    this.store.dispatch(showSpinner());
    this.store.dispatch(getMovies({filters}));
  }
}
