import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchService {

  token: string;
  matchUrl = this.global.config("matchUrl");

  constructor(
    public http: HttpClient,
    public global: GlobalProvider
  ) {
    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
  }

  getMatch() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.matchUrl + "getMatch", {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  addGroupMatch(atlet) {
    let data = {
      atlet: atlet
    }

    return new Promise((resolve, reject) => {
      this.http.post<any>(this.matchUrl + "group-add", data, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }
}
