import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorRouting} from './error.routing';
import {SharedModule} from '../../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ErrorComponent} from './error.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRouting,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class ErrorModule {
}
