import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PagingComponent } from "./paging.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("PagingComponent", () => {
  let component: PagingComponent;
  let pagesItemElements: DebugElement[];
  let pagesLinkElements: DebugElement[];
  let activeElement: DebugElement;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    component.pages = [0, 1, 2, 3, 4];
    component.currentPage = 4;
    fixture.detectChanges();
    pagesItemElements = fixture.debugElement.queryAll(By.css(".page-item"));
    activeElement = pagesItemElements.find(pe => pe.classes["active"]);
    pagesLinkElements = fixture.debugElement.queryAll(By.css(".page-link"));
  });

  it("should create 5 list-items for 5 page array", () => {
    expect(pagesLinkElements.length).toBe(7);
  });

  it("should set 4th list-item as active", () => {
    expect(pagesItemElements.indexOf(activeElement)).toBe(5);
  });

  it("should disable previous when we are on the first page", () => {
    let ulElement = fixture.debugElement.query(By.css("ul"));
    component.currentPage = 0;
    fixture.detectChanges();
    expect(ulElement.children[0].classes["disabled"]).toBeTruthy();
  });

  it("should disable next when we are on the last page", () => {
    let ulElement = fixture.debugElement.query(By.css("ul"));
    component.currentPage = 4;
    fixture.detectChanges();
    expect(ulElement.children[6].classes["disabled"]).toBeTruthy();
  });

  it("should raise goTo event when clicked (triggerEventHandler)", () => {
    let selectedPage: number;
    component.goTo.subscribe((page: number) => (selectedPage = page));
    pagesItemElements[4].triggerEventHandler("click", null);

    expect(selectedPage).toBe(3);
  });

  it("should raise previous event when clicked (triggerEventHandler)", () => {
    component.currentPage = 4;
    fixture.detectChanges();
    let selectedPage: number = component.currentPage;
    component.previous.subscribe(() => selectedPage--);
    pagesItemElements[0].triggerEventHandler("click", null);

    expect(selectedPage).toBe(3);
  });

  it("should raise previous event when clicked (triggerEventHandler)", () => {
    component.currentPage = 2;
    fixture.detectChanges();
    let selectedPage: number = component.currentPage;
    component.next.subscribe(() => selectedPage++);
    pagesItemElements[pagesItemElements.length - 1].triggerEventHandler(
      "click",
      null
    );
    expect(selectedPage).toBe(3);
  });
});
