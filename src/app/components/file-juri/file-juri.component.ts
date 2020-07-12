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
  selector: 'app-file-juri',
  templateUrl: './file-juri.component.html',
  styleUrls: ['./file-juri.component.css']
})

export class FileJuriComponent implements OnInit {

  userData:any;
  deleteId:number;

  constructor(
    private userService: UserService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUsers()
    .then((res:any) => {
      this.userData = res.result;
    })
    .catch((err) => {
      console.info(err);
    })
  }

  setIdUser(id) {
    this.deleteId = id;
  }

  deleteUser() {
    this.userService.deletaUser(this.deleteId)
    .then((res) => {
      Toast.fire({
        icon: 'success',
        title: `Data berhasil dihapus`,
      });

      this.getAllUser();

    }).catch((err) => {
      Toast.fire({
        icon: 'warning',
        title: `Kesalahan pada server`,
      });
    })
  }

  getDataUser(data) {
    this.routes.navigate(['edit-juri', {
      id: data.id_user,
      username: data.username,
      position: data.name,
      tatami: data.tatami
    }])
  }
}
