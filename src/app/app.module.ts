import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { GridComponent } from "./grid/grid.component";
import { TableComponent } from "./grid/table/table.component";
import { PagingComponent } from './grid/paging/paging.component';

@NgModule({
  declarations: [GridComponent, TableComponent, PagingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [GridComponent]
})
export class AppModule {}
