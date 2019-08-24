import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.getMovieIdFromRouteParams());
  }

  private getMovieIdFromRouteParams(): string {
    return this.route.snapshot.params.imdbId;
  }
}
