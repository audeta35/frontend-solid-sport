import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/services/users';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  payload = {
    username: '',
    password: '',
    usernameJury: '',
    passwordJury: '',
  }

  isDisabled = false;
  isDisabled2 = false;
  isLoading = false;
  isLoadingOne = false;

  valid = {
    username: true,
    password: true,
    usernameJury: true,
    passwordJury: true,
  }

  show_button: Boolean = false;
  show_eye: Boolean = false;
  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void { }

  isValidate() {
    if (this.payload.username && this.payload.password) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  isValidate2() {
    if (this.payload.usernameJury && this.payload.passwordJury) {
      this.isDisabled2 = true;
    } else {
      this.isDisabled2 = false;
    }
  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  onSubmit() {

    this.isLoadingOne = true;

    setTimeout(() => {
      if (!this.payload.username || !this.payload.password) {
        for (let i in this.payload) {
          if (!this.payload[i]) {
            this.valid[i] = false;

            Toast.fire({
              icon: 'warning',
              title: 'Field tidak boleh kosong',
            });

            this.isLoadingOne = false;

          }
        }
      } else {

        let payload = {
          username: this.payload.username,
          password: this.payload.password
        }

        this.userService.loginAdmin(payload)
          .then((res: any) => {
            this.isLoadingOne = false;
            console.log('hello', res);

            sessionStorage.setItem('users', JSON.stringify(res.result[0]))
            sessionStorage.setItem('token', JSON.stringify(res.token))
            window.location.replace('/index');

          }).catch((err: any) => {
            this.isLoadingOne = false;
            Toast.fire({
              icon: 'error',
              title: err.error.message,
            });
            console.log(err);
          })
      }
    }, 1500)
  }
  onSubmitJury() {

    this.isLoading = true;

    setTimeout(() => {
      if (!this.payload.usernameJury || !this.payload.passwordJury) {
        for (let i in this.payload) {
          if (!this.payload[i]) {
            this.valid[i] = false;

            Toast.fire({
              icon: 'warning',
              title: 'Field tidak boleh kosong',
            });

            this.isLoading = false;

          }
        }
      } else {

        let payload = {
          username: this.payload.usernameJury,
          password: this.payload.passwordJury
        }

        this.userService.loginUsers(payload)
          .then((res: any) => {
            this.isLoading = false;
            console.log('hello', res);

            sessionStorage.setItem('users', JSON.stringify(res.result[0]))
            sessionStorage.setItem('token', JSON.stringify(res.token))
            window.location.replace('/index');

          }).catch((err: any) => {
            this.isLoading = false;
            Toast.fire({
              icon: 'error',
              title: err.error.message,
            });
            console.log(err);
          })
      }
    }, 1500)
  }
}
