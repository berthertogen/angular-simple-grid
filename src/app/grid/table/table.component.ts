import { Component, OnInit, Input } from "@angular/core";
import { Column } from "./column";
import { Row } from "./row";

@Component({
  selector: "simple-grid-table",
  template: `
    <table class="table">
      <thead>
        <tr>
          <th *ngFor="let column of columns">{{ column.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td *ngFor="let cell of row.cells">{{ cell.data }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class TableComponent implements OnInit {
  @Input() columns: Array<Column>;
  @Input() rows: Array<Row>;

  constructor() {}

  ngOnInit() {}
}
