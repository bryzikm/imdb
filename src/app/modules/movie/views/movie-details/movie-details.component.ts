import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie.model';
import {Store} from '@ngrx/store';
import {MovieState} from '../../../../store/movie/movie.reducer';
import {getMovieByImdbId} from '../../../../store/movie/movie.actions';
import {showSpinner} from '../../../../store/spinner/spinner.actions';
import {ActorState} from '../../../../store/actor/actor.reducer';
import {Actor} from '../../models/actor.model';
import {getActorByImdbId, removeActor} from '../../../../store/actor/actor.actions';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie> = this.store.select(state => state.movie.movie);
  actor$: Observable<Actor> = this.store.select(state => state.actor.actor);

  constructor(private route: ActivatedRoute,
              private store: Store<{movie: MovieState, actor: ActorState}>) {
  }

  ngOnInit() {
    this.getMovieByImbdId();
  }

  getActorByImdbId(actor: Actor): void {
    this.store.dispatch(showSpinner());
    this.store.dispatch(getActorByImdbId({imdbId: actor.imdbId}));
  }

  closeDialog(): void {
    this.store.dispatch(removeActor());
  }

  private getMovieByImbdId(): void {
    const imdbId = this.getMovieIdFromRouteParams();

    this.store.dispatch(showSpinner());
    this.store.dispatch(getMovieByImdbId({imdbId}));
  }

  private getMovieIdFromRouteParams(): string {
    return this.route.snapshot.params.imdbId;
  }
}
