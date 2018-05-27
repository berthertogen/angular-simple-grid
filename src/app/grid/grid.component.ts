import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Column } from "./table/column";
import { Observable, of, Subscription } from "rxjs";
import { Row } from "./table/row";
import { Result } from "./result.model";

@Component({
  selector: "simple-grid-grid",
  template: `
    <simple-grid-table [columns]="columns" [rows]="rows"></simple-grid-table>
    <simple-grid-paging [pages]="pages" [currentPage]="currentPage" (previous)="previous()" (next)="next()" (goTo)="goTo($event)"></simple-grid-paging>
  `,
  styles: []
})
export class GridComponent implements OnInit {
  @Input() pageSize: number = 10;
  @Input() result: Observable<Result>;
  @Input() columns: Array<Column>;

  rows: Array<Row>;
  pages: Array<number>;
  currentPage: number = 0;

  resultSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.mockData();
    this.resultSubscription = this.result.subscribe(result => {
      this.rows = result.rows;
      this.buildPages(result);
    });
  }

  private buildPages(result: Result) {
    this.pages = Array.from(Array(result.numberOfRows / this.pageSize).keys());
  }

  next() {
    if (this.currentPage !== this.pages.length - 1) {
      this.currentPage++;
    }
  }
  previous() {
    if (this.currentPage !== 0) {
      this.currentPage--;
    }
  }
  goTo(page: number) {
    this.currentPage = page;
  }

  private mockData() {
    this.columns = [{ title: "Col1" }, { title: "Col2" }];
    this.result = of({
      rows: [
        { cells: [{ data: "Test1" }, { data: "Test2" }] },
        { cells: [{ data: "Test1" }, { data: "Test2" }] },
        { cells: [{ data: "Test1" }, { data: "Test2" }] },
        { cells: [{ data: "Test1" }, { data: "Test2" }] },
        { cells: [{ data: "Test1" }, { data: "Test2" }] }
      ],
      numberOfRows: 100
    });
  }
}
