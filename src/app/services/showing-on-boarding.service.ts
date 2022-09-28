import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreatedPage} from "../CreatedPage";

@Injectable({
  providedIn: 'root'
})
export class ShowingOnBoardingService {

  private  apiUrl = 'http://localhost:5002/createdPages'

  constructor(private http:HttpClient) { }

  getPages(): Observable<CreatedPage[]>{
    return this.http.get<CreatedPage[]>(this.apiUrl)
  }
}
