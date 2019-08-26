import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column} from './models/column.model';
import {Observable} from 'rxjs';
import {Movie} from '../../../modules/movie/models/movie.model';
import {Filters} from './models/filters.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() data: Observable<any>;
  @Input() limitOptions: number[];
  @Input() set total(total: number) {
    this.totalAmount = total;
    this.countNumberOfPages();
  }
  @Output() rowClick = new EventEmitter<Movie>();
  @Output() filtersChange = new EventEmitter<any>();

  filters: Filters = {
    sortBy: '',
    sortDir: '',
    limit: 0,
    page: 1
  };
  totalAmount = 0;
  numberOfPages = 1;
  readonly ASCENDING = '1';
  readonly DESCENDING = '-1';
  private readonly FILTERS = 'FILTERS';

  constructor() {
  }

  ngOnInit(): void {
    this.getSavedFilters();
  }

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }

  onSortHeaderClick(column: Column): void {
    if (column.isSortable) {
      this.resolveSortingParams(column);
    }
  }

  onElementsAmountChange(): void {
    this.filters.page = 1;
    this.countNumberOfPages();
    this.saveFilters();
  }

  decrementPage() {
    this.filters.page -= 1;
    this.saveFilters();
  }

  incrementPage() {
    this.filters.page += 1;
    this.saveFilters();
  }

  private resolveSortingParams(column: Column): void {
    if (this.filters.sortBy === column.name) {
      if (this.filters.sortDir === this.ASCENDING) {
        this.filters.sortDir = this.DESCENDING;
      } else if (this.filters.sortDir === this.DESCENDING) {
        this.filters.sortDir = '';
        this.filters.sortBy = '';
      }
    } else {
      this.filters.sortBy = column.name;
      this.filters.sortDir = this.ASCENDING;
    }

    this.saveFilters();
  }

  private getSavedFilters() {
    const savedFilters = this.getFilters();

    if (savedFilters) {
      this.filters = savedFilters;
    }

    this.countNumberOfPages();
    this.filtersChange.emit(this.filters);
  }

  private getFilters(): Filters {
    const filters = localStorage.getItem(this.FILTERS);

    return filters ? JSON.parse(filters) : null;
  }

  private saveFilters(): void {
    localStorage.setItem(this.FILTERS, JSON.stringify(this.filters));
    this.filtersChange.emit(this.filters);
  }

  private countNumberOfPages() {
    this.numberOfPages = this.totalAmount && this.filters.limit ? Math.ceil(this.totalAmount / this.filters.limit) : this.filters.page;
  }
}
