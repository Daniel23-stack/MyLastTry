import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-onboarding',
  templateUrl: './add-onboarding.component.html',
  styleUrls: ['./add-onboarding.component.css']
})
export class AddOnboardingComponent implements OnInit {

  // @ts-ignore
  @Input() text: string;
  @Output() addOnBoardingClk = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  AddOnBoarding(){
    this.addOnBoardingClk.emit();

  }
}
