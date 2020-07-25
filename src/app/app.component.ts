import { Component, OnInit } from '@angular/core';
import { UserService } from './provider/services/users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { SwPush } from '@angular/service-worker';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pathname = window.location.pathname;
  loginPage: boolean;
  title = 'fss';
  path = this.pathname.split('/')[1];
  user: any = {};
  jury: any = [];

  year: any = new Date().getFullYear();

  constructor(
    private userService: UserService,
    private routes: Router,
    private socket: Socket,
    private swPush: SwPush
  ) {
    if (sessionStorage.getItem('token')) {
      this.user = JSON.parse(sessionStorage.getItem('users'));
      this.user.name = this.user.name.toUpperCase();
      this.loginPage = true;

      this.socket.emit('login', this.user);

      this.socket.on('getStatus', () => {
        userService
          .getUsers()
          .then((res: any) => {
            this.jury = res.result;
          })
          .catch((err) => {
            console.warn(err);
          });
      });

      this.socket.on('getStatus2', () => {
        userService
          .getUsers()
          .then((res: any) => {
            this.jury = res.result;
          })
          .catch((err) => {
            console.warn(err);
          });
      });

      if (this.path === 'scoreboard') {
        this.loginPage = false;
      } else if (this.path === 'list-score') {
        this.loginPage = false;
      } else {
        this.loginPage = true;
      }

      if (this.path === '') {
        this.routes.navigate(['/index']);
      }
    } else if (this.path === 'scoreboard') {
      this.loginPage = false;
    } else if (this.path === 'list-score') {
      this.loginPage = false;
    } else {
      this.loginPage = false;
      if (this.path === 'login-admin') {
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Harap login terlebih dahulu',
        });
        this.routes.navigate(['/login-admin']);
      }
    }
  }
  ngOnInit(): void {}

  testBtn() {
    this.socket.emit("reset-scoreboard");
  }

  logout() {
    console.log(this.user);
    this.userService
      .logOut(this.user)
      .then((res) => {
        sessionStorage.clear();
        window.location.replace('/login-admin');
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: 'Proses Logout Gagal',
        });
      });
  }
}
