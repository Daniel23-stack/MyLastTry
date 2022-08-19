import { Injectable } from '@angular/core';
import {OnBoardingPage} from "../OnBoardingPage";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {
  private apiUrl = 'http://localhost:5002/pages'

  constructor(private http:HttpClient) { }

  getOnBoardingPages(): Observable<OnBoardingPage[]>{
    return this.http.get<OnBoardingPage[]>(this.apiUrl)
  }
}
