import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global';

/*
  Generated class for the AuthService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PointService {
  token: string;
  pointsUrl = this.global.config("pointsUrl");

  constructor(
    public http: HttpClient,
    public global: GlobalProvider
  ) {
    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
    }
  }

  getPointForAdmin(idAtlet, idMatch) {
    return new Promise((resolve, reject) => {
      this.http.get(this.pointsUrl+`get-point/${ idAtlet }/${ idMatch }`, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  getPointForScoreboard(idAtlet, idMatch) {
    return new Promise((resolve, reject) => {
      this.http.get(this.pointsUrl+`get-scoreboard-point/${ idAtlet }/${ idMatch }`)
      .subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  doPointsByUser(payload) {
    console.log('=== masuk service', payload)
    return new Promise((resolve, reject) => {
      this.http.post(this.pointsUrl+ 'calculate', payload, {
        headers: new HttpHeaders().set("Authorization", this.token)
      }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }
}
