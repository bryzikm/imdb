import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from '../../shared/services/urls/urls.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN = 'TOKEN';

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {
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

  removeToken() {
    localStorage.removeItem(this.TOKEN);
  }

  isUserAuthenticated() {
    const token = this.getToken();

    try {
      if (token) {
        const decodedToken = this.jwtHelper.decodeToken(token);

        return !this.jwtHelper.isTokenExpired(token) && decodedToken;
      }

      return false;
    } catch (e) {
      return false;
    }
  }
}
