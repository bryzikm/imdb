import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsComponent} from './movie-details.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {actorReducer} from '../../../../store/actor/actor.reducer';
import {movieReducer} from '../../../../store/movie/movie.reducer';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot({
          actorReducer,
          movieReducer
        }),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        MovieDetailsComponent
      ],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
