import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AtletService } from 'src/app/provider/services/atlet';
import { PointService } from 'src/app/provider/services/points';
import { UserService } from 'src/app/provider/services/users';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});
declare var $: any;

@Component({
  selector: 'app-assessment-juri',
  templateUrl: './assessment-juri.component.html',
  styleUrls: ['./assessment-juri.component.css'],
})
export class AssessmentJuriComponent implements OnInit {
  isLoading: boolean = false;
  userData: any = {};
  optionValue: any = [];
  payload:any = {};

  juryData: any = {};

  constructor(
    private socket: Socket,
    private atletService: AtletService,
    private pointService: PointService,
    private userService: UserService
  ) {
    this.juryData = JSON.parse(sessionStorage.getItem('users'));

    this.socket.emit('result-juri');

    this.socket.on('data-juri', () => {
      this.atletService
        .getAtletByMatch()
        .then((res) => {
          console.log(res);
          this.userData = res['result'][0];
          console.log(this.userData);

          this.payload.userId = this.juryData.id_user;
          this.payload.matchId = this.userData.id_match;
          this.payload.athleteId = this.userData.id_atlet;

          console.log(this.payload);

          this.isLoading = false;
        })
        .catch((err) => {
          if (err['status'] === 404) {
            console.log('notFound');
          }
          console.log(err);
          this.isLoading = false;
        });
      console.log('this.socket data juri')
    });

    this.socket.on('reset-data-juri', () => {
      window.location.reload()
    })
  }

  ngOnInit(): void {

    for (let i = 5.0; i < 10; i = i + 0.2) {
      this.optionValue.push(i.toFixed(1));
    }
    this.isLoading = true;
  }

  _getAtlet() {
    this.atletService
      .getAtletByMatch()
      .then((res) => {
        console.log(res);
        this.userData = res['result'][0];
        console.log(this.userData);

        this.payload.userId = this.juryData.id_user;
        this.payload.matchId = this.userData.id_match;
        this.payload.athleteId = this.userData.id_atlet;

        console.log(this.payload);

        this.isLoading = false;
      })
      .catch((err) => {
        if (err['status'] === 404) {
          console.log('notFound');
        }
        console.log(err);
        this.isLoading = false;
      });
  }

  _handlerPoint(point, property) {
    this.payload[property] = point;

    console.log(this.payload);
  }

  onSubmit() {

    this.socket.emit('scoreboard');
    this.socket.emit('result-admin');
    this.socket.emit('result-juri');

    console.log(this.payload);
    this.payload.techValue = Number(this.payload.techValue);
    this.payload.athValue = Number(this.payload.athValue);

    this.pointService
      .doPointsByUser(this.payload)
      .then((res) => {
        console.log(res);

        Swal.fire({
          icon: 'success',
          title: 'Sukses',
          text: `${this.userData.atlet_name} berhasil di nilai`
        });

        (this.payload.techValue = 0), (this.payload.athValue = 0);
        $('#pointOptions').prop('selected', function () {
          return this.defaultSelected;
        });
        $('#pointOptions2').prop('selected', function () {
          return this.defaultSelected;
        });
      })
      .catch((err) => {
        if (err['status'] === 400) {
          Toast.fire({
            icon: 'info',
            text:
              'Maaf, anda sudah memberikan nilai terhadap atlit ini sebelumnya',
          });
        }
        console.log(err);
      });
  }

  logout() {

    let payload = {
      id_user: this.juryData.id_user,
    };
    this.userService
      .logOut(payload)
      .then((res) => {
        sessionStorage.clear();
        window.location.replace('/login-admin');
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: 'Proses Logout Gagal',
        });
      });
  }
}
