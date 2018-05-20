import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Column } from "./table/column";

@Component({
  selector: "simple-grid-grid",
  template: `
    <p>
      grid works!
    </p>
    <simple-grid-table [columns]="columns"></simple-grid-table>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class GridComponent implements OnInit {
  columns: Array<Column>;

  constructor() {}

  ngOnInit() {
    this.columns = [{ title: "Col1" }, { title: "Col2" }];
  }
}
