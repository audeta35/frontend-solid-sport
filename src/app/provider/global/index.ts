import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  constructor(
    public http: HttpClient
  ) { }

  config(url: string) {
    let path = "http://localhost:3000/";
    // let path = 'http://192.168.43.164:3000/';
    // let path = 'http://192.168.43.14:3000/';
    // const path = 'http://192.168.10.116:3000/';
    // let path = 'http://192.168.1.74:3000/';
    // let path = 'http://192.168.43.183:3000/';
    // let path = "https://solidapi.bisapastibisa.com/";
    const config = {
      "juriUrl": path + "users/",
      "atletUrl": path + "atlet/",
      "matchUrl": path + "match/",
      "pointsUrl": path + "points/",
      "tatamiUrl": path + "tatami/"
    }

    return config[url];
  }
}
