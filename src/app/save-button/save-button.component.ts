import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {

  @Input() text: any;
  @Output() savedClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onSavedClicked(){
    this.savedClicked.emit()
  }
}
