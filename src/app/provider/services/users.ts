import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {
  constructor(
    public http: HttpClient,
    public global: GlobalProvider
  ){
    console.log("users service provider!")
  }

  juriUrl = this.global.config("juriUrl");

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.juriUrl, {
        headers: new HttpHeaders()
      })
      .subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  loginUsers(payload) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.juriUrl + "login", payload, {
        headers: new HttpHeaders()
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  loginAdmin(payload) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.juriUrl + "login-admin", payload, {
        headers: new HttpHeaders()
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  logOut(payload) {
    return new Promise((resolve, reject) => {
      this.http.put<any>(this.juriUrl + "logout", payload, {
        headers: new HttpHeaders()
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }
}
