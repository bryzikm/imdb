import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageDialogComponent} from './image-dialog.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideMockStore} from '@ngrx/store/testing';
import {appInitialState} from '../../../store';

describe('ImageDialogComponent', () => {
  let component: ImageDialogComponent;
  let fixture: ComponentFixture<ImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        ImageDialogComponent
      ],
      providers: [
        HttpClient,
        provideMockStore({
          initialState: appInitialState
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
