import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TheShowComponent} from "./the-show/the-show.component";
import {MyPagesComponent} from "./my-pages/my-pages.component";
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'admin',
    component: MyPagesComponent
  },
  {
    path: 'show',
    component: TheShowComponent
  },
  {
    path: 'formBuilder',
    component: FormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
