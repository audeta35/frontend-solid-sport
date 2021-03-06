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
  token: string;
  juriUrl = this.global.config("juriUrl");

  constructor(
    public http: HttpClient,
    public global: GlobalProvider
  ){
    if(sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
  }

  getUsers() {
    if(sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.juriUrl)
      .subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  getAdmin() {

    return new Promise((resolve, reject) => {
      this.http.get<any>(this.juriUrl + "admin", {
        headers: new HttpHeaders().set('Authorization', this.token)
      })
        .subscribe((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        })
    })
  }

  addUsers(payload) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.juriUrl + "add", payload, {
        headers : new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  editUser(payload) {
    return new Promise((resolve, reject) => {
      this.http.put<any>(this.juriUrl + "edit", payload, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  deletaUser(id) {
    return new Promise((resolve, reject) => {
      this.http.delete<any>(this.juriUrl + "delete/" + id, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
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
        headers: new HttpHeaders().set('Authorization', this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }
}
