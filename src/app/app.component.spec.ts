import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {JwtModule} from '@auth0/angular-jwt';
import {provideMockStore} from '@ngrx/store/testing';
import {appInitialState} from './store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
            deps: [HttpClient]
          }
        }),
        JwtModule.forRoot({
          config: {
            tokenGetter: () => localStorage.getItem('TOKEN')
          }
        })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient,
        provideMockStore({
          initialState: appInitialState
        })
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
