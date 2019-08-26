import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private static readonly DEFAULT_LANG = 'en';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.translateService.use(AppComponent.DEFAULT_LANG);
  }
}
