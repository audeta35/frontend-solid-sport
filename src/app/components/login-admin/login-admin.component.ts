import { Component, OnInit } from '@angular/core';

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

  valid = {
    username: true,
    password: true,
    usernameJury: true,
    passwordJury: true,
  }

  show_button: Boolean = false;
  show_eye: Boolean = false;
  constructor() {

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
    if (!this.payload.username || !this.payload.password) {
      for (let i in this.payload) {
        if (!this.payload[i]) {
          this.valid[i] = false;

        }
      }
    } else {
      window.location.href = 'index';
    }
  }
  onSubmitJury() {
    if (!this.payload.usernameJury || !this.payload.passwordJury) {
      for (let i in this.payload) {
        if (!this.payload[i]) {
          this.valid[i] = false;
        }
      }
    } else {
      alert('berhasil login juri');
    }
  }
}
