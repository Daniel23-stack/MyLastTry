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
  @Output() onEditedPAge: EventEmitter<CreatedPage> = new EventEmitter()


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

  AddOnBoarding() {
    console.log()
  }

  //clearing the text editor
  cleartextEditor() {
    this.pageContents = ""
    console.log("cleared");
  }

  updateEditedPage() {
    const newEditedPage ={
      pageContents: this.createdPaige.pageContents,
      id:this.createdPaige.id
    };
    this.onEditedPAge.emit(newEditedPage);

  }

}
