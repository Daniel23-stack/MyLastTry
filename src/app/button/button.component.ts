import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  // @ts-ignore
  @Input() text : string
  @Output() btnClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  OnClicked() {
    this.btnClicked.emit();
  }
}
