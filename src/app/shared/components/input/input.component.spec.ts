import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideMockStore} from '@ngrx/store/testing';
import {appInitialState} from '../../../store';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidationComponent} from '../validation/validation.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        InputComponent,
        ValidationComponent
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
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
