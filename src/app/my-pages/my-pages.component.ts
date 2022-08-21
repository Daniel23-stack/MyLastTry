import { Component, OnInit } from '@angular/core';
import {PAGES} from "../mock-pages";
import {Page} from "../Page";
import {PageService} from "../services/page.service";
import {CreatedPageService} from "../services/created-page.service";
import {CreatedPage} from "../CreatedPage";
import {OnBoardingPage} from "../OnBoardingPage";
import {OnBoardingService} from "../services/on-boarding.service";


@Component({
  selector: 'app-my-pages',
  templateUrl: './my-pages.component.html',
  styleUrls: ['./my-pages.component.css']
})
export class MyPagesComponent implements OnInit {

  pages: Page[] = [];
  created: CreatedPage[] = [];
  onBoardingPages: OnBoardingPage[] = [];


  //Created pages
  Url: any = "";
  theContents: any;
  photo: any = '/assets/img/main.png';

  constructor(private  pageService:PageService, public createdPage: CreatedPageService, private onboardingPageService:OnBoardingService) { }

  ngOnInit(): void {
    this.onboardingPageService.getOnBoardingPages().subscribe((onBoardingPages) =>(this.onBoardingPages= onBoardingPages));
    this.pageService.getPages().subscribe((pages) =>(this.pages = pages));
    this.createdPage.getPages().subscribe((createds) =>this.created = createds);

  }
  deletePageCreated(createdPage:CreatedPage){
    this.createdPage.deletePageCreated(createdPage).subscribe(()=>(this.created = this.created.filter((cp) =>cp.id !==createdPage.id)));
  }
  deletePage(page: Page) {
    this.pageService.deletePage(page).subscribe(() =>(this.pages = this.pages.filter((p) => p.id !==page.id )));
  }

  AddPage(page: Page) {
    this.pageService.AddPage(page).subscribe((page)=>(this.pages.push(page)))
  }
  AddCreatedPage(createdPage: CreatedPage) {
    this.createdPage.AddCreatedPage(createdPage).subscribe((createdPage) =>(this.created.push(createdPage)));
  }
}