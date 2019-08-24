import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from '../../shared/services/urls/urls.service';
import {Observable} from 'rxjs';
import {Movie} from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovieByImdbId(imdbId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${UrlsService.MOVIES}/${imdbId}`);
  }

  getMovies(params: any): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${UrlsService.MOVIES}`);
  }
}
