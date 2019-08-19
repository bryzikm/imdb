import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';
import {VideoListComponent} from './views/video-list/video-list.component';
import {VideoDetailsComponent} from './views/video-details/video-details.component';
import {VideoRouting} from './video.routing';

@NgModule({
  declarations: [VideoComponent, VideoListComponent, VideoDetailsComponent],
  imports: [
    CommonModule,
    VideoRouting
  ]
})
export class VideoModule {
}
