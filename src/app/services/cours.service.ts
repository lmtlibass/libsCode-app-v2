import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private http: HttpClient
  ) { }

    getModules(){
      return this.http.get(environment.api_url + 'modules');
    }

    getRecentsCours(){
      return this.http.get(environment.api_url + 'coursRe');
    }

    getCours(){
      return this.http.get(environment.api_url + 'cours');
    }


}
