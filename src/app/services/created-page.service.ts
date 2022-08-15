import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";
import {CreatedPage} from "../CreatedPage";



@Injectable({
  providedIn: 'root'
})
export class CreatedPageService {
  private  apiUrl = 'http://localhost:5002/CreatedPages'

  constructor(private http:HttpClient) { }

  getPages(): Observable<CreatedPage[]>{
    return this.http.get<CreatedPage[]>(this.apiUrl)
  }

  deletePageCreated(createdPage:CreatedPage): Observable<CreatedPage>{
    const  url = `${this.apiUrl}/${createdPage.id}`
    return this.http.delete<CreatedPage>(url)
  }
  AddCreatedPage(createdPage:CreatedPage): Observable<CreatedPage>{
    return this.http.post<CreatedPage>(this.apiUrl, createdPage)
  }
}
