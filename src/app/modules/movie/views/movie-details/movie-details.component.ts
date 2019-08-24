import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie.model';
import {Store} from '@ngrx/store';
import {MovieState} from '../../../../store/movie/movie.reducer';
import {getMovieByImdbId} from '../../../../store/movie/movie.actions';
import {showSpinner} from '../../../../store/spinner/spinner.actions';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie> = this.store.select(state => state.movie);

  constructor(private route: ActivatedRoute,
              private store: Store<MovieState>) {
  }

  ngOnInit() {
    this.getMovieByImbdId();
  }

  private getMovieByImbdId() {
    const imdbId = this.getMovieIdFromRouteParams();

    this.store.dispatch(showSpinner());
    this.store.dispatch(getMovieByImdbId({imdbId}));
  }

  private getMovieIdFromRouteParams(): string {
    return this.route.snapshot.params.imdbId;
  }
}
