import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private static readonly API_URL: string = environment.apiUrl;

  // AUTH
  public static readonly LOGIN_USER = `${UrlsService.API_URL}/auth/login`;

  // MOVIES
  public static readonly MOVIES = `${UrlsService.API_URL}/movies`;

  // ACTORS
  public static readonly ACTORS = `${UrlsService.API_URL}/actors`;
}
