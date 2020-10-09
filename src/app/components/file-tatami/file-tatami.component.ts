import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TatamiServices } from 'src/app/provider/services/tatami';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});


@Component({
  selector: 'app-file-tatami',
  templateUrl: './file-tatami.component.html',
  styleUrls: ['./file-tatami.component.css']
})
export class FileTatamiComponent implements OnInit {

  tatami:any = []
  idTatami:number;

  constructor(private router: Router, private tatamiService: TatamiServices) {
    this.getTatami();
  }

  ngOnInit(): void {}

  setId(id) {
    this.idTatami = id;
  }

  deleteTatami() {
    this.tatamiService.delete(this.idTatami)
    .then((res) => {
      Toast.fire({
        icon: 'success',
        title: `Data berhasil dihapus`,
      });

      this.getTatami();
    })
    .catch((err) => {
      console.log(err)
      Toast.fire({
        icon: 'error',
        title: `Kesalahan pada server`,
      });
    })
  }

  getTatami() {
    this.tatamiService.getTatami()
      .then((res: any) => {
        this.tatami = res.result
        console.log(res.result)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
