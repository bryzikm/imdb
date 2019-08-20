import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from '../../shared/services/urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN = 'TOKEN';

  constructor(private http: HttpClient) {
  }

  loginUser({login, password}) {
    return this.http.post(UrlsService.LOGIN_USER, {login, password});
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }
}
