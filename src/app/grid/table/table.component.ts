import { Component, OnInit, Input } from "@angular/core";
import { Column } from "./column";

@Component({
  selector: "simple-grid-table",
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let column of columns">{{ column.title }}</th>
        </tr>
      </thead>
    </table>
  `,
  styles: []
})
export class TableComponent implements OnInit {
  @Input() columns: Array<Column>;

  constructor() {}

  ngOnInit() {}
}
