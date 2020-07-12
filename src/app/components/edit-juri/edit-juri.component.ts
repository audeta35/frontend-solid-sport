import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/provider/services/users';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-edit-juri',
  templateUrl: './edit-juri.component.html',
  styleUrls: ['./edit-juri.component.css']
})
export class EditJuriComponent implements OnInit {

  payload:any = {
    id : "",
    username: "",
    position: "",
    tatami: "",
  }

  old:any = {
    id: "",
    username: "",
    position: "",
    tatami: "",
  }

  isValid:boolean = true;
  isLoading:boolean = false;

  listJury = [{
    name: "Juri 1",
    value: "j1"
  }, {
    name: "Juri 2",
    value: "j2"
  }, {
    name: "Juri 3",
    value: "j3"
  }, {
    name: "Juri 4",
    value: "j4"
  }, {
    name: "Juri 5",
    value: "j5"
  }, {
    name: "Juri 6",
    value: "j6"
  }, {
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

  constructor(
    private userService: UserService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    this.routes.params.subscribe((param) => {
      this.payload.id = param.id;
      this.payload.username = param.username;
      this.payload.position = param.position;
      this.payload.tatami = param.tatami;

      this.old.id = param.id;
      this.old.username = param.username;
      this.old.position = param.position;
      this.old.tatami = param.tatami;
    }, (err) => {
      console.log(err)
    })
  }

  ngOnInit(): void {}

  keyUp() {
    let { username, position, tatami } = this.payload;
    if (username && position && tatami) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  onSubmit() {
    this.isLoading = !this.isLoading;

    let {username, position, tatami} = this.payload;

    setTimeout(() => {
      if(
        username === this.old.username &&
        position === this.old.position &&
        tatami === this.old.tatami
      ) {
        this.isLoading = !this.isLoading;
        Toast.fire({
          icon: 'warning',
          title: `Tidak ada perubahan data`,
        });
      } else {
        this.userService.editUser(this.payload)
        .then((res) => {
          this.isLoading = !this.isLoading;
          Toast.fire({
            icon: 'success',
            title: `Data juri berhasil di ubah`,
          });
          this.router.navigate(['/file-juri'])
        }).catch((err) => {
          this.isLoading = !this.isLoading;
          console.warn(err);
          Toast.fire({
            icon: 'error',
            title: `Kesalahan pada server`,
          });
        })
      }
    }, 1500)
  }

}
