import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {InputComponent} from './components/input/input.component';
import {ValidationComponent} from './components/validation/validation.component';
import {ButtonComponent} from './components/button/button.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationComponent} from './components/notification/notification.component';
import {UrlsService} from './services/urls/urls.service';
import {LoggerService} from './services/logger/logger.service';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AuthGuard} from './guards/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {TableComponent} from './components/table/table.component';

const COMPONENTS = [
  InputComponent,
  ValidationComponent,
  ButtonComponent,
  SpinnerComponent,
  NotificationComponent,
  NavbarComponent,
  TableComponent
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UrlsService,
        LoggerService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    };
  }
}
