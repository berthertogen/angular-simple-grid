import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Column } from "./table/column";
import { Observable, of } from "rxjs";
import { Row } from "./table/row";

@Component({
  selector: "simple-grid-grid",
  template: `
    <simple-grid-table [columns]="columns" [rows]="rows | async"></simple-grid-table>
  `,
  styles: [],
})
export class GridComponent implements OnInit {
  columns: Array<Column>;
  rows: Observable<Array<Row>>;

  constructor() {}

  ngOnInit() {
    this.columns = [{ title: "Col1" }, { title: "Col2" }];
    this.rows = of([
      { cells: [{data:"Test1"}, {data:"Test2"}] },
      { cells: [{data:"Test1"}, {data:"Test2"}] },
      { cells: [{data:"Test1"}, {data:"Test2"}] },
      { cells: [{data:"Test1"}, {data:"Test2"}] },
      { cells: [{data:"Test1"}, {data:"Test2"}] },
    ]);
  }
}
