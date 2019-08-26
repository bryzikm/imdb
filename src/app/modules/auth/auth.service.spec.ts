import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: () => localStorage.getItem('TOKEN')
        }
      })
    ],
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
