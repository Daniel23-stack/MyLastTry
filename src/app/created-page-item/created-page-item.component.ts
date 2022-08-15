import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreatedPage} from "../CreatedPage";


@Component({
  selector: 'app-created-page-item',
  templateUrl: './created-page-item.component.html',
  styleUrls: ['./created-page-item.component.css']
})
export class CreatedPageItemComponent implements OnInit {

  // @ts-ignore
  @Input() createdPaige: CreatedPage;

  @Output() onClickedCreatedPageDelete:EventEmitter<CreatedPage> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  deleteMyCreatedPage(myPage){
    this.onClickedCreatedPageDelete.emit(myPage)
  }
}
