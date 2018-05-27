import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "simple-grid-paging",
  template: `
  <nav>
    <ul class="pagination justify-content-end">
      <li class="page-item" (click)="previous.emit()" [class.disabled]="currentPage === 0"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span>Previous</a></li>
      <li class="page-item" *ngFor="let page of pages" [class.active]="page === currentPage" (click)="goTo.emit(page)">
        <a class="page-link" href="#">{{ page + 1 }}</a>
      </li>
      <li class="page-item" (click)="next.emit()" [class.disabled]="currentPage === pages?.length - 1"><a class="page-link" href="#">Next<span aria-hidden="true">&raquo;</span></a></li>
    </ul>
  </nav>
  `
})
export class PagingComponent implements OnInit {
  @Input() pages: Array<number>;
  @Input() currentPage: number = 0;

  @Output() previous: EventEmitter<void> = new EventEmitter<void>();
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
