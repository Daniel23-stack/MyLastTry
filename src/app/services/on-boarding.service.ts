import { Injectable } from '@angular/core';
import {OnBoardingPage} from "../OnBoardingPage";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {
  private apiUrl = 'http://localhost:5002/OnBoardingPages'

  constructor(private http:HttpClient) { }

  getOnBoardingPages(): Observable<OnBoardingPage[]>{
    return this.http.get<OnBoardingPage[]>(this.apiUrl)
  }
  AddCreatedOnboarding(onCreatedOnBoarding:OnBoardingPage): Observable<OnBoardingPage>{
    return this.http.post<OnBoardingPage>(this.apiUrl, onCreatedOnBoarding)
  }
  deletePageOnBoarding(onBoardingPage: OnBoardingPage): Observable<OnBoardingPage>{
    const url = `${this.apiUrl}/${onBoardingPage.id}`
    return this.http.delete<OnBoardingPage>(url)
  }
}
