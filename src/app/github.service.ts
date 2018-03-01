import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  rootApiUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(this.rootApiUrl + 'users/ErkHal');
  }
}
