import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';
import {VideoListComponent} from './views/video-list/video-list.component';
import {VideoDetailsComponent} from './views/video-details/video-details.component';
import {VideoRouting} from './video.routing';
import {SharedModule} from '../../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    VideoComponent,
    VideoListComponent,
    VideoDetailsComponent
  ],
  imports: [
    CommonModule,
    VideoRouting,
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
export class VideoModule {
}
