import { Component, OnInit } from '@angular/core';
import { UserService } from './provider/services/users';
import Swal from 'sweetalert2';

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
  user:any;

  constructor(private userService: UserService) {
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
