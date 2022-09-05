import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import {CreatedPage} from "../CreatedPage";
import {OnBoardingPage} from "../OnBoardingPage";



@Component({
  selector: 'app-created-page-item',
  templateUrl: './created-page-item.component.html',
  styleUrls: ['./created-page-item.component.css']
})
export class CreatedPageItemComponent implements OnInit {



  // @ts-ignore
  @Input() createdPaige: CreatedPage;

  // @ts-ignore
  @Input() createdOnBoarding : OnBoardingPage

  @Output() onClickedCreatedPageDelete:EventEmitter<CreatedPage> = new EventEmitter();


  @Output() addOnBoardingClk:EventEmitter<OnBoardingPage>= new EventEmitter();

  constructor() { }

  //onBoarding Page Creation


  pageLogo: any;
  pageBackgroundPic: any;
  pageContents:string = ""

  ngOnInit(): void {
  }
  deleteMyCreatedPage(myPage){
    this.onClickedCreatedPageDelete.emit(myPage)
  }
  //add to onboarding
  i:any;
  AddOnBoarding() {
    console.log()
  }

  pushToOnBoarding() {

    const newOnBoarding = {
      pageLogo:this.pageLogo,
      pageBackgroundPic: this.pageBackgroundPic,
      pageContents: this.pageContents

    }
    this.addOnBoardingClk.emit(newOnBoarding);
  }


}
