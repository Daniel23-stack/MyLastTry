import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OnBoardingPage} from "../OnBoardingPage";


@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit {


  // @ts-ignore
  @Input() createdOnBoarding: OnBoardingPage

  @Output() ondeletedOnBoardingPage: EventEmitter<OnBoardingPage> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {

  }

  onClickDeleteOnBoarding(myOnboardingPages) {
    this.ondeletedOnBoardingPage.emit(myOnboardingPages);
  }
}
