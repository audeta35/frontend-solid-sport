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
    // local dev path
    let path = "http://localhost:3000/";
    
    // prod path
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
