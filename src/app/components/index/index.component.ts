import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
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
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tatami:any = [];
  listTatami:number = 0;
  config:boolean = false;
  isLoading:boolean = false;

  constructor(private routes: Router, private tatamiService: TatamiServices) {}

  ngOnInit(): void {
    this.getTatami()
  }

  getTatami() {
    this.tatamiService.getTatami()
    .then((res:any) => {
      this.listTatami = res.result.length;
      console.log(res.result.length)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  configBtn() {
    this.config = !this.config;
  }

  alert() {
    Toast.fire({
      icon: 'info',
      title: `Tidak dapat di proses, harap lengkapi data`,
    });
  }

  addForm() {
    this.tatami.push({
      name: ``,
      class: ``
    })
  }

  delForm(id) {
    this.tatami.splice(id, 1)
  }

  submitForm() {
    this.isLoading = !this.isLoading;

    let payload = {
      payload : this.tatami
    }

    setTimeout(() => {
      this.tatamiService.insertTatami(payload)
      .then((res) => {
        Toast.fire({
          icon: 'success',
          title: `Konfigurasi berhasil`,
        });
        this.getTatami();
        this.tatami = [];
        this.isLoading = !this.isLoading;
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: `Kesalahan pada server`,
        });
        console.log(err)
        this.getTatami();
        this.tatami = [];
        this.isLoading = !this.isLoading;
      })
    }, 500)
  }

}
