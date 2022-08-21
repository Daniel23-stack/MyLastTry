import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Page} from "../Page";

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  // @ts-ignore
  @Input() page: Page

  @Output() onClickedPageDelete:EventEmitter<Page> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClickedDeleted(page){
    this.onClickedPageDelete.emit(page);
  }
}
