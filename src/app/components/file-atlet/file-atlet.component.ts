import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { MatchService } from 'src/app/provider/services/match';
import Swal from 'sweetalert2';
import { Socket } from 'ngx-socket-io';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-file-atlet',
  templateUrl: './file-atlet.component.html',
  styleUrls: ['./file-atlet.component.css'],
})
export class FileAtletComponent implements OnInit {

  isLoading: boolean = false;
  atlet: any = [];
  group: any = [];

  constructor(
    private atletService: AtletService,
    private matchService: MatchService,
    private socket: Socket
  ) {}

  ngOnInit(): void {
    this.getAllAtlet();
  }

  getAllAtlet() {
    this.atletService
      .getAtlet()
      .then((res: any) => {
        this.atlet = res.result.atlet;
        this.group = res.result.group;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  finishMatch(id) {
    this.isLoading = !this.isLoading;

    setTimeout(() => {
      this.matchService
        .updateMatch(id)
        .then((res) => {
          this.atletService
            .getAtlet()
            .then((res: any) => {

              Toast.fire({
                icon: 'info',
                title: `Atlet telah selesai bertanding`,
              });

              this.atlet = res.result.atlet;
              this.group = res.result.group;
              this.isLoading = !this.isLoading;
            })
            .catch((err) => {
              console.log(err);
              this.isLoading = !this.isLoading;
            });

          // this.socket.emit("reset-scoreboard")
          // this.socket.emit('reset-admin');
          // this.socket.emit('reset-juri');
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = !this.isLoading;
        });

    }, 500)
  }

  startGroupMatch(atlet) {
    this.matchService
      .addGroupMatch(atlet)
      .then((res) => {
        Toast.fire({
          icon: 'info',
          title: `Atlet ${atlet.atlet_name} memulai pertandingan`,
        });
        this.socket.emit('scoreboard');
        this.socket.emit('result-admin');
        this.socket.emit('result-juri');
        this.getAllAtlet();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteAtlet(atlet) {

    this.atletService.deleteAtlet(atlet.id_atlet)
    .then((res:any) => {

      Toast.fire({
        icon: 'success',
        title: `Atlet ${atlet.atlet_name} di diskualifikasi`,
      });

      this.atletService
        .getAtlet()
        .then((res: any) => {

          this.atlet = res.result.atlet;
          this.group = res.result.group;
        })
        .catch((err) => {
          console.log(err);
        });

          // this.socket.emit("reset-scoreboard")
          // this.socket.emit('reset-admin');
          // this.socket.emit('reset-juri');
    })
    .catch((err) => {
      console.log(err)
    })
  }

  deleteGroup(group) {
    this.atletService.deleteGroup(group.id)
      .then((res: any) => {

        Toast.fire({
          icon: 'success',
          title: `${group.group_name} berhasil dihapus`,
        });

        console.log(res);

        this.atletService
          .getAtlet()
          .then((res: any) => {
            this.atlet = res.result.atlet;
            this.group = res.result.group;
          })
          .catch((err) => {
            console.log(err);
          });

        // this.socket.emit("reset-scoreboard")
        // this.socket.emit('reset-admin');
        // this.socket.emit('reset-juri');
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
