import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pathname = window.location.pathname;
  loginPage: boolean;
  title = 'fss';
  constructor() {
    let path = this.pathname.split("/")[1];
    if (path === 'login-admin') {
      this.loginPage = false;
    } else {
      this.loginPage = true;

    }

  }
  ngOnInit(): void {
    console.log('app component!');
  }
  logout() {
    window.location.replace('/login-admin');
  }
}
