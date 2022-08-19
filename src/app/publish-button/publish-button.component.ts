import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-publish-button',
  templateUrl: './publish-button.component.html',
  styleUrls: ['./publish-button.component.css']
})
export class PublishButtonComponent implements OnInit {

  @Input()text: any;
  @Output()publishedClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onPublishedClicked(){
    this.publishedClicked.emit()
  }
}
