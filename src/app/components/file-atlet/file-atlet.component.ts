import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { MatchService } from 'src/app/provider/services/match';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-file-atlet',
  templateUrl: './file-atlet.component.html',
  styleUrls: ['./file-atlet.component.css']
})
export class FileAtletComponent implements OnInit {

  atlet:any = [];
  group:any = [];

  constructor(
    private atletService: AtletService,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.getAllAtlet();
  }

  getAllAtlet() {
    this.atletService.getAtlet()
      .then((res: any) => {
        this.atlet = res.result.atlet;
        this.group = res.result.group;
        console.log(res.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  startGroupMatch(atlet) {
    this.matchService.addGroupMatch(atlet)
    .then((res) => {
      Toast.fire({
        icon: 'info',
        title: `Atlet ${atlet.atlet_name} memulai pertandingan`,
      });
      this.getAllAtlet();
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
