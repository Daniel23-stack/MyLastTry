import { Component, OnInit } from '@angular/core';
import {PAGES} from "../mock-pages";
import {Page} from "../Page";
import {PageService} from "../services/page.service";
import {CreatedPageService} from "../services/created-page.service";
import {CreatedPage} from "../CreatedPage";
import {OnBoardingPage} from "../OnBoardingPage";
import {OnBoardingService} from "../services/on-boarding.service";
import {ShowingOnBoardingService} from "../services/showing-on-boarding.service";


@Component({
  selector: 'app-my-pages',
  templateUrl: './my-pages.component.html',
  styleUrls: ['./my-pages.component.css']
})
export class MyPagesComponent implements OnInit {

  pages: Page[] = [];
  created: CreatedPage[] = [];
  editedPage: CreatedPage[] = [];
  onBoardingPages: OnBoardingPage[] = [];
  showBoard:CreatedPage[] = [];



  constructor(private  pageService:PageService,
              public createdPageService: CreatedPageService,
              private onboardingPageService:OnBoardingService,
              private showingOnBoarding:ShowingOnBoardingService) {
  }

  ngOnInit(): void {
    this.onboardingPageService.getOnBoardingPages().subscribe((onBoardingPages) =>(this.onBoardingPages = onBoardingPages));
    this.pageService.getPages().subscribe((pages) =>(this.pages = pages));
    this.createdPageService.getCreatedPaige().subscribe((createds) =>this.created = createds);
    this.showingOnBoarding.getPages().subscribe((showboards) =>(this.showBoard = showboards))

  }
  //delete a created page
  deletePageCreated(createdPage:CreatedPage){
    this.createdPageService.deletePageCreated(createdPage).subscribe(()=>(this.created = this.created.filter((cp) =>cp.id !==createdPage.id)));
  }
  deletePage(page: Page) {
    this.pageService.deletePage(page).subscribe(() =>(this.pages = this.pages.filter((p) => p.id !==page.id )));
  }

  //working with editing pages
  updateEditedPage(editedPaige: CreatedPage){
    this.createdPageService.EditCreatedPage(editedPaige).subscribe
    ((myeditedPage)=>(this.editedPage.push(myeditedPage)));
  }

  AddPage(page: Page) {
    this.pageService.AddPage(page).subscribe((page)=>(this.pages.push(page)))
  }
  AddCreatedPage(createdPage: CreatedPage) {
    this.createdPageService.AddCreatedPage(createdPage).subscribe((createdPage) =>(this.created.push(createdPage)));
  }
  AddCreatedOnBoarding(createonBoarding: OnBoardingPage){
    this.onboardingPageService.AddCreatedOnboarding(createonBoarding).subscribe((createonBoarding)=>(this.onBoardingPages.push(createonBoarding)));
  }
  //floating action button
  public openMenu: boolean = false;
  isOver = false;

  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  hello(mex: string){
    alert('Hello '+mex+'!' );
  }
}
