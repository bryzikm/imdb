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

const COMPONENTS = [
  InputComponent,
  ValidationComponent,
  ButtonComponent,
  SpinnerComponent,
  NotificationComponent
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
        LoggerService
      ]
    };
  }
}
