import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlsService} from '../../shared/services/urls/urls.service';
import {Actor} from './models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private httpClient: HttpClient) {
  }

  getActorByImdbId(imdbId: string): Observable<Actor> {
    return this.httpClient.get<Actor>(`${UrlsService.ACTORS}/${imdbId}`);
  }
}
