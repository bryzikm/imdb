import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {MovieListComponent} from './views/movie-list/movie-list.component';
import {MovieDetailsComponent} from './views/movie-details/movie-details.component';
import {MovieRouting} from './movie.routing';
import {SharedModule} from '../../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {movieReducer} from '../../store/movie/movie.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects} from '../../store/movie/movie.effects';
import {actorReducer} from '../../store/actor/actor.reducer';
import {ActorEffects} from '../../store/actor/actor.effects';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieRouting,
    SharedModule,
    StoreModule.forFeature('movie', movieReducer),
    StoreModule.forFeature('actor', actorReducer),
    EffectsModule.forFeature([
      MovieEffects,
      ActorEffects
    ]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class MovieModule {
}
