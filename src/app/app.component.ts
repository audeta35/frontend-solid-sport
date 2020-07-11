import { Component, OnInit } from '@angular/core';
import { UserService } from './provider/services/users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

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
  user:any = {};

  constructor(private userService: UserService, private routes: Router) {
    if (sessionStorage.getItem('token')) {
      this.user = JSON.parse(sessionStorage.getItem('users'));
      this.user.name = this.user.name.toUpperCase();
      this.loginPage = true;
      this.routes.navigate(['/index']);
    } else {

      this.loginPage = false;

      if(this.path === "login-admin") {

      }
      else {
        Toast.fire({
          icon: 'error',
          title: 'Harap login terlebih dahulu',
        });
        this.routes.navigate(['/login-admin']);
      }
    }
  }
  ngOnInit(): void {}
  logout() {
    this.userService.logOut(this.user)
    .then((res) => {
      sessionStorage.clear();
      window.location.replace('/login-admin');
    })
    .catch((err) => {
      Toast.fire({
        icon: 'error',
        title: 'Proses Logout Gagal',
      });
    })
  }
}
