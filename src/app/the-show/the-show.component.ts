import {Component, Input, OnInit} from '@angular/core';
import {CreatedPage} from "../CreatedPage";
import {ShowingOnBoardingService} from "../services/showing-on-boarding.service";

@Component({
  selector: 'app-the-show',
  templateUrl: './the-show.component.html',
  styleUrls: ['./the-show.component.css']
})
export class TheShowComponent implements OnInit {

  showBoard:CreatedPage[] = [];
  responsiveOptions;


  constructor(private showingOnBoarding:ShowingOnBoardingService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.showingOnBoarding.getPages().subscribe((showboards) =>(this.showBoard = showboards))
  }

}
