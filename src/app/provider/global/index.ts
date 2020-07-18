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
  ){}

  config(url: string) {
    let path = "http://localhost:3000/";
    // let path = 'http://192.168.1.11:3000/';
    const config = {
      "juriUrl" : path + "users/",
      "atletUrl" : path + "atlet/",
      "matchUrl": path + "match/",
      "pointsUrl": path + "points/"
    }

    return config[url];
  }
}
