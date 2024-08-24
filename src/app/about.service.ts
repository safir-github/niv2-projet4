import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface About {
  history: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'about.json';

  constructor(private http: HttpClient) {}

  getAboutInfo(): Observable<About> {
    return this.http.get<About>(this.apiUrl);
  }
}
