import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableComponent} from './table.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideMockStore} from '@ngrx/store/testing';
import {appInitialState} from '../../../store';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: ((http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')),
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        TableComponent
      ],
      providers: [
        HttpClient,
        provideMockStore({
          initialState: appInitialState
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment page', () => {
    component.filters.page = 1;
    component.incrementPage();

    expect(component.filters.page).toEqual(2);
  });

  it('should decrement page', () => {
    component.filters.page = 2;
    component.decrementPage();

    expect(component.filters.page).toEqual(1);
  });

  it('should sort data ascending', () => {
    const column = {
      isSortable: true,
      name: 'name',
      header: 'NAME'
    };
    component.filters.sortDir = '';
    component.filters.sortBy = '';
    component.onSortHeaderClick(column);

    expect(component.filters.sortDir).toEqual('1');
  });

  it('should sort data descending', () => {
    const column = {
      isSortable: true,
      name: 'name',
      header: 'NAME'
    };
    component.filters.sortDir = '1';
    component.filters.sortBy = 'name';
    component.onSortHeaderClick(column);

    expect(component.filters.sortDir).toEqual('-1');
  });

  it('should turn off sorting', () => {
    const column = {
      isSortable: true,
      name: 'name',
      header: 'NAME'
    };
    component.filters.sortDir = '-1';
    component.filters.sortBy = 'name';
    component.onSortHeaderClick(column);

    expect(component.filters.sortDir).toEqual('');
  });

  it('should not sort by the column', () => {
    const column = {
      isSortable: false,
      name: 'name',
      header: 'NAME'
    };
    component.filters.sortBy = '';
    component.onSortHeaderClick(column);

    expect(component.filters.sortBy).toEqual('');
  });

  it('should count number of pages', () => {
    component.total = 11;
    component.filters.limit = 2;
    component.onElementsAmountChange();

    expect(component.numberOfPages).toEqual(6);
  });
});
