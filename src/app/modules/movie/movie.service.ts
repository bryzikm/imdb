import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UrlsService} from '../../shared/services/urls/urls.service';
import {Observable} from 'rxjs';
import {Movie, MoviesResponse} from './models/movie.model';
import {Filters} from '../../shared/components/table/models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovieByImdbId(imdbId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${UrlsService.MOVIES}/${imdbId}`);
  }

  getMovies(filters: Filters): Observable<MoviesResponse> {
    let params = new HttpParams();

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.append(key, filters[key]);
      }
    });

    return this.httpClient.get<MoviesResponse>(`${UrlsService.MOVIES}`, {params});
  }
}
