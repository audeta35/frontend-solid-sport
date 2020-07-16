import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AtletService {
  token: string;
  atletUrl = this.global.config("atletUrl");

  constructor(
    public http: HttpClient,
    public global: GlobalProvider
  ) {
    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
  }

  getAtlet() {
    return new Promise((resolve, reject) => {
      this.http.get(this.atletUrl, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  addAtletGroup(payload, group) {
    let atlet = {
      payload : payload,
      group : group
    }

    return new Promise((resolve, reject) => {
      this.http.post<any>(this.atletUrl + "add", atlet, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  addAtlet(payload) {
    let atlet = {
      payload: payload
    }

    return new Promise((resolve, reject) => {
      this.http.post<any>(this.atletUrl + "add-hth", atlet, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }
}
