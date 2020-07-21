import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TatamiServices {
  token: string;
  tatamiUrl = this.global.config('tatamiUrl');

  constructor(public http: HttpClient, public global: GlobalProvider) {
    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
  }

  getTatami() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.tatamiUrl + "/")
      .subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  insertTatami(payload) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.tatamiUrl + "/add", payload)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete<any>(this.tatamiUrl + "/del/" + id)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    })
  }
}
