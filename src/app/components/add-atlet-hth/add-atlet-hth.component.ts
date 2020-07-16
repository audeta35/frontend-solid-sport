import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-add-atlet-hth',
  templateUrl: './add-atlet-hth.component.html',
  styleUrls: ['./add-atlet-hth.component.css']
})
export class AddAtletHthComponent implements OnInit {

  names:any = [];
  totalForm:number;
  isProcess:boolean = false;

  constructor(
    private atletService: AtletService,
    private routes: Router
  ) { }

  ngOnInit(): void {}

  addForm() {

    this.isProcess = true;

    setTimeout(() => {
      let i: number;

      for (i = 1; i <= this.totalForm; i++) {
        this.names.push({
          name: "",
          kontingen: "",
          kata: "",
          attribute: "",
          group: "null"
        })
      }

      this.isProcess = false;
    }, 500)
  }

  setForm() {
    this.names.push({
      name: "",
      kontingen: "",
      kata: "",
      attribute: "",
      group: "null"
    })
  }

  deleteForm(i) {

    this.names.splice(i, 1)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submitForm() {
    this.atletService.addAtlet(this.names)
      .then((res) => {
        console.log(res)
        Toast.fire({
          icon: 'success',
          title: `Data Atlet berhasil di tambah`,
        });
        this.routes.navigate(['file-atlet']);
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: `Kesalahan pada server`,
        });
        console.log(err)
      })
  }
}
