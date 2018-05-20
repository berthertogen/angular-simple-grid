import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GridComponent } from './grid/grid.component';
import { TableComponent } from './grid/table/table.component';

@NgModule({
  declarations: [
    GridComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[GridComponent],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const simpleGridGrid = createCustomElement(GridComponent, { injector });
    customElements.define('simple-grid-grid', simpleGridGrid);
  }

  ngDoBootstrap() {}
 }
