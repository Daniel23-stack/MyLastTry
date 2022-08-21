import { Injectable } from '@angular/core';
import {Page} from "../Page";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable,} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private  apiUrl = 'http://localhost:5002/pages'

  constructor(private http:HttpClient) { }

  getPages(): Observable<Page[]>{
    return this.http.get<Page[]>(this.apiUrl)
  }
  deletePage(page: Page): Observable<Page>{
    const url = `${this.apiUrl}/${page.id}`
    return this.http.delete<Page>(url)
  }
  AddPage(page: Page): Observable<Page>{

    return this.http.post<Page>(this.apiUrl, page)
  }
}
