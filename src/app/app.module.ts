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


import { TheShowComponent } from './the-show/the-show.component';
import {CarouselModule} from "primeng/carousel";
import { SaveButtonComponent } from './save-button/save-button.component';
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from "primeng/ripple";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AccordionModule} from "primeng/accordion";

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
    SaveButtonComponent,
    FormBuilderComponent,
    LandingPageComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    AngularFullpageModule,
    BrowserAnimationsModule,
    SwiperModule,
    StyleClassModule,
    NgxDynamicCarouselModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), FormsModule, ButtonModule, CarouselModule, CarouselModule, CarouselModule, FieldsetModule, CardModule, RippleModule, MatButtonModule, MatIconModule, AccordionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
