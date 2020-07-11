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
  path = this.pathname.split("/")[1];
  user:any;

  constructor() {
    if (sessionStorage.getItem('token')) {
      this.user = JSON.parse(sessionStorage.getItem('users'));
      this.user.name = this.user.name.toUpperCase();
    }
  }
  ngOnInit(): void {
    if (this.path === 'login-admin') {
      this.loginPage = false;
    } else {
      this.loginPage = true;

    }
  }
  logout() {
    sessionStorage.clear();
    window.location.replace('/login-admin');
  }
}
