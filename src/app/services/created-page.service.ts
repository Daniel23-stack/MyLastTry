import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";
import {CreatedPage} from "../CreatedPage";



@Injectable({
  providedIn: 'root'
})
export class CreatedPageService {
  private  apiUrl = 'http://localhost:5002/createdPages'

  constructor(private http:HttpClient) { }

  getCreatedPaige(): Observable<CreatedPage[]>{
    return this.http.get<CreatedPage[]>(this.apiUrl)
  }
  EditCreatedPage(editedPage:CreatedPage):Observable<CreatedPage>{
    return this.http.put<CreatedPage>(this.apiUrl + `/`+ editedPage.id, editedPage);
  }

  deletePageCreated(createdPage:CreatedPage): Observable<CreatedPage>{
    const  url = `${this.apiUrl}/${createdPage.id}`
    return this.http.delete<CreatedPage>(url)
  }
  AddCreatedPage(createdPage:CreatedPage): Observable<CreatedPage>{
    return this.http.post<CreatedPage>(this.apiUrl, createdPage)
  }
}
