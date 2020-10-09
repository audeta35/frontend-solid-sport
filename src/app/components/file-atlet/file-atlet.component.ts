import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { MatchService } from 'src/app/provider/services/match';
import Swal from 'sweetalert2';
import { Socket } from 'ngx-socket-io';
import { async } from '@angular/core/testing';

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
  finalAtlet = {
    atlet_name: "",
    attribute: "",
    class: "",
    grouping: "",
    id_atlet: null,
    kata_name: "",
    kontingen: "",
    status: null,
  };

  constructor(
    private atletService: AtletService,
    private matchService: MatchService,
    private socket: Socket
  ) {}

  ngOnInit(): void {
    this.getAllAtlet();
  }

  truncate() {
    this.atletService.truncateAtlet()
    .then((res) => {
      this.getAllAtlet();
      console.log("pertandingan di refresh ulang", res);
      Toast.fire({
        icon: 'success',
        title: `pertandingan berhasil di refresh`,
      });
    })
    .catch((err) => { 
      Toast.fire({
        icon: 'error',
        title: `pertandingan gagal di refresh`,
      });
      console.log("pertandingan gagal di refresh", err);
    })
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

  isMatch(atlet) {

    Toast.fire({
      icon: 'error',
      title: `atlet sedang bertanding`,
    });
  }

  finishMatch(atlet) {
    this.isLoading = !this.isLoading;

    this.matchService
        .updateMatch(atlet.id_atlet)
        .then((res) => {
          setTimeout(() => {
          this.atletService
            .getAtlet()
            .then((res: any) => {

              Toast.fire({
                icon: 'info',
                title: `Atlet telah selesai bertanding`,
              });

              this.socket.emit("reset-scoreboard")
              this.socket.emit('reset-admin');
              this.socket.emit('reset-juri');

              this.atlet = res.result.atlet;
              this.group = res.result.group;
              this.isLoading = !this.isLoading;
            })
            .catch((err) => {
              console.log(err);
              this.isLoading = !this.isLoading;
            });

          }, 500)
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = !this.isLoading;
        });
  }

  finalMatch(atlet) {
    this.finalAtlet = {
      atlet_name: atlet.atlet_name,
      attribute: "aka",
      class: atlet.class,
      grouping: "group final",
      id_atlet: atlet.id_atlet,
      kata_name: "",
      kontingen: atlet.kontingen,
      status: 0,
    };
  }

  setFinalMatch() {
    console.log(this.finalAtlet);
    this.atletService.addAtlet(this.finalAtlet)
    .then((res) => {
      Toast.fire({
        icon: 'success',
        title: `Atlet ${this.finalAtlet.atlet_name} masuk babak final`,
      });

      console.log(res)

      this.getAllAtlet();
    })
    .catch((err:any) => {
      Toast.fire({
        icon: 'error',
        title: `Kesalahan pada server`,
      });
      console.log(err)
    })
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

  truncateMatch() {
    this.atletService.truncatePoints()
    .then((res) => {
      Toast.fire({
        icon: 'success',
        title: `Reset Babak Final Sukses`,
      });

      this.getAllAtlet();
    })
    .catch((err) => {
      console.log(err);
      Toast.fire({
        icon: 'info',
        title: `Reset Babak Final Gagal`,
      });
    })
  }

  deleteAtlet(atlet) {

    this.atletService.deleteAtlet(atlet.id_atlet)
    .then((res:any) => {

      Toast.fire({
        icon: 'success',
        title: `Atlet ${atlet.atlet_name} di diskualifikasi`,
      });

      this.socket.emit("reset-scoreboard");
      this.socket.emit('reset-admin');
      this.socket.emit('reset-juri');

      this.atletService
        .getAtlet()
        .then((res: any) => {

          this.atlet = res.result.atlet;
          this.group = res.result.group;
        })
        .catch((err) => {
          console.log(err);
        });
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

        this.atletService
          .getAtlet()
          .then((res: any) => {
            this.atlet = res.result.atlet;
            this.group = res.result.group;
            this.socket.emit("reset-scoreboard")
            this.socket.emit('reset-admin');
            this.socket.emit('reset-juri');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
