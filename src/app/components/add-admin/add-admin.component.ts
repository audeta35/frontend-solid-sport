import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/services/users';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TatamiServices } from 'src/app/provider/services/tatami';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  payload = {
    username: "",
    password: "",
    position: "admin",
    tatami: "",
    level: 1
  }

  listTatami = [];

  isValid: boolean = false;
  isLoading: boolean = false;

  showButton: boolean = false;

  constructor(
    private userService: UserService,
    private routes: Router,
    private tatamiService: TatamiServices
  ) {
    this.getTatami();
  }

  ngOnInit(): void {}

  showPassword() {
    this.showButton = !this.showButton;
  }

  async getTatami() {
    await this.tatamiService.getTatami()
    .then((res:any) => {
      this.listTatami = res.result;
      console.log(res.result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  keyUp() {
    let { username, password, position, tatami } = this.payload;
    if (username && password && position && tatami) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  onSubmit() {
    this.isLoading = !this.isLoading;

    setTimeout(() => {
      this.userService.addUsers(this.payload)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: `Data admin berhasil di tambah`,
          });
          this.routes.navigate(['file-admin']);
        }).catch((err) => {
          console.warn(err);
        })
    }, 1500)
  }

}
