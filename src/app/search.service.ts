import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  searchPage(query: string): Observable<any> {
    const data = {
        query: query
    };
    return this.http.post('authenticate', data);
  }

  search(query: string): Observable<any> {
    const data = {
        query: query
    };
    return this.http.post('authenticate', data);
  }
}
