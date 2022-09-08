import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SwiperModule } from 'swiper/angular';
import { NgxDynamicCarouselModule } from "ngx-dynamic-carousel";

// @ts-ignore




//froala import
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { ButtonComponent } from './button/button.component';
import { PageItemComponent } from './page-item/page-item.component';
import {FormsModule} from "@angular/forms";
import { BackgroundChangeInputComponent } from './background-change-input/background-change-input.component';
import { CreatedPageItemComponent } from './created-page-item/created-page-item.component';
import { PublishButtonComponent } from './publish-button/publish-button.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import {ButtonModule} from "primeng/button";

import { AddOnboardingComponent } from './add-onboarding/add-onboarding.component';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";

import { TheShowComponent } from './the-show/the-show.component';
import {CarouselModule} from "primeng/carousel";

@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    NavbarComponent,
    MyPagesComponent,
    ButtonComponent,
    PageItemComponent,
    BackgroundChangeInputComponent,
    CreatedPageItemComponent,
    PublishButtonComponent,
    OnBoardingComponent,
    AddOnboardingComponent,
    TheShowComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CarouselModule,
        AngularFullpageModule,
        BrowserAnimationsModule,
        SwiperModule,
        NgxDynamicCarouselModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), FormsModule, ButtonModule, CarouselModule, MdbCarouselModule, CarouselModule, CarouselModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
