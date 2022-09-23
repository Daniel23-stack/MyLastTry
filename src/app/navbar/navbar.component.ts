
import { Component, EventEmitter, Output, ViewEncapsulation, Input, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import FroalaEditor from "froala-editor";
declare var $: any;

import {Page} from "../Page";
import {CreatedPage} from "../CreatedPage";
import {FroalaComponent} from "../froala/froala.component";
import {ChangeDetectorRef} from "@angular/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  @ViewChild(FroalaComponent ) froo !: FroalaComponent;


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  //Variable on databinding

  // newPageName: any;
  // newPageDiscription: any;

  pageName: any;
  pageDescription: any;

  //page creation variables
  pageLogo: any;
  pageBackgroundPic: any;
  pageContents:string = ""

  OnAddPage(){
    console.log("Page Added");
  }
  OnCreatedPage(){
    console.log("page created")

  }

  @Output() onAddPage: EventEmitter<Page> = new EventEmitter()
  @Output() onCreatedPage: EventEmitter<CreatedPage> = new EventEmitter()



  onSubmit() {
    if(!this.pageName){
      alert('Please Add A Page');
      return;
    }
    const newPage = {
      pageName: this.pageName,
      pageDescription: this.pageDescription
    };
    this.onAddPage.emit(newPage)

    this.pageName = "";
    this.pageDescription = "";
  }
  // ngAfterViewInit(): void {
  //   this.pageContents = this.froo.content;
  //   this.cd.detectChanges();
  // }


  AddNewLogo() {

  }

  logoUpload(e: any) {
    if(e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.pageLogo=event.target.result;
      }
    }
  }

  pageBackgroundUpload(e: any) {
    if(e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.pageBackgroundPic=event.target.result;
      }
    }
  }

  onPublish() {
    if(!this.pageContents){
      alert('Please Page Contents');
      return;
    }
    const newPageCreated = {
      // pageLogo: this.pageLogo,
      // pageBackgroundPic: this.pageBackgroundPic,
      pageContents: this.pageContents

    };
    this.onCreatedPage.emit(newPageCreated)

    this.pageLogo = "";
    this.pageBackgroundPic = "";
    this.pageContents = "";
  }


  saveEdited() {
    console.log("page edited")
  }
}


