import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/services/users';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-add-juri',
  templateUrl: './add-juri.component.html',
  styleUrls: ['./add-juri.component.css']
})
export class AddJuriComponent implements OnInit {

  payload = {
    username: "",
    password: "",
    position: "",
    tatami: "",
    level: 0
  }

  isValid: boolean = false;
  isLoading: boolean = false;

  listJury = [{
    name : "Juri 1",
    value : "j1"
  },{
    name: "Juri 2",
    value: "j2"
  },{
    name: "Juri 3",
    value: "j3"
  },{
    name: "Juri 4",
    value: "j4"
  },{
    name: "Juri 5",
    value: "j5"
  },{
    name: "Juri 6",
    value: "j6"
  },{
    name: "Juri 7",
    value: "j7"
  }];

  listTatami = [{
    name: "AKA",
    value: "aka"
  }, {
    name: "AO",
    value: "ao"
  }];

  showButton: boolean = false;

  constructor(
    private userService: UserService,
    private routes: Router
  ) { }

  ngOnInit(): void {}

  showPassword() {
    this.showButton = !this.showButton;
  }

  keyUp() {
    let {username, password, position, tatami} = this.payload;
    if(username && password && position && tatami) {
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
          title: `Data juri berhasil di tambah`,
        });
        this.routes.navigate(['file-juri']);
      }).catch((err) => {
        console.warn(err);
      })
    }, 1500)
  }
}
