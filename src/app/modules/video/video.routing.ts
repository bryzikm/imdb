import {VideoComponent} from './video.component';
import {VideoListComponent} from './views/video-list/video-list.component';
import {VideoDetailsComponent} from './views/video-details/video-details.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const VIDEO_ROUTES: Routes = [
  {
    path: '',
    component: VideoComponent,
    children: [
      {
        path: '',
        component: VideoListComponent
      },
      {
        path: ':id',
        component: VideoDetailsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VIDEO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class VideoRouting {
}
