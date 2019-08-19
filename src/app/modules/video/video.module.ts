import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { VideoListComponent } from './views/video-list/video-list.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';

@NgModule({
  declarations: [VideoComponent, VideoListComponent, VideoDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
