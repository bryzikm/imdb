import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from './shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/auth/auth.effects';
import {StoreModule} from '@ngrx/store';
import {spinnerReducer} from './store/spinner/spinner.reducer';
import {notificationReducer} from './store/notification/notification.reducer';
import {NotificationEffects} from './store/notification/notification.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    SharedModule.forRoot(),
    StoreModule.forRoot({
      spinner: spinnerReducer,
      notification: notificationReducer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      NotificationEffects
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
