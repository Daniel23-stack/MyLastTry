import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TheShowComponent} from "./the-show/the-show.component";
import {MyPagesComponent} from "./my-pages/my-pages.component";

const routes: Routes = [
  {
    path: '',
    component: MyPagesComponent
  },
  {
    path: 'show',
    component: TheShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
