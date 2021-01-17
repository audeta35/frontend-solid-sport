import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AtletService } from 'src/app/provider/services/atlet';
import { PointService } from 'src/app/provider/services/points';
import { Router } from '@angular/router';
import { UserService } from 'src/app/provider/services/users';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  isLoading: boolean = false;
  userData: any = {
    atlet_name: '',
    kata_name: '',
    kontingen: '',
    attribute: 'AKA'
  };
  juryList: any = [];
  pointList: any = [];
  cmpPointList: any = [];
  atlet: any;
  finalScore: number = 1001;
  Data = [
    {
      username: 'Muhammad deta sandi bima',
      kontingen: 'paspampres',
      kata: 'unsu',
      score: '69',
      belt: 'AKA',
    },
  ];

  constructor(
    private socket: Socket, private atletService: AtletService, private pointService: PointService,
    private routes: Router, private userService: UserService
  ) {
    console.log(this.finalScore)
    socket.emit('scoreboard');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getSevenJury();
    this.socket.on('getStatus', () => {
      this.userService.getUsers()
        .then((res: any) => {
          this.juryList = res.result;
        })
        .catch((err) => {
          console.warn(err);
        });
    });
    this.socket.on('getStatus2', () => {
      this.userService.getUsers()
        .then((res: any) => {
          this.juryList = res.result;
        })
        .catch((err) => {
          console.warn(err);
        });
    });
    this.socket.on('data-score', () => {
      this.atletService.getAtletByMatch()
        .then((res: any) => {
          this.userData = res['result'][0];
          console.log(this.userData)
          this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
            .then((response: any) => {
              this.pointList = [];

              this.finalScore = response['result']['total_point'] || 1001;

              console.log('masuk gag', this.finalScore)

              this.cmpPointList = response['result']['athlete_point_list'] ? [...response['result']['athlete_point_list']] : [...response['result']];
              for (let i = this.pointList.length; i < 8; i++) {
                if (i === 5) {
                  this.pointList.push({
                    FAC_ATH: 0.3,
                    FAC_TECH: 0.7,
                    noColor: true
                  })
                } else if (i < 5) {

                  this.pointList.push({
                    technicalValue: 0,
                    athleticValue: 0,
                    noColor: true
                  })
                } else if (i === 6) {
                  this.pointList.push({
                    technical_point_result: response['result']['technical_point_result'] || '0',
                    athletic_point_result: response['result']['athletic_point_result'] || '0',
                    noColor: true,
                  })
                } else if (i === 7) {
                  this.pointList.push({
                    technical_point: response['result']['technical_point'] || '0',
                    athletic_point: response['result']['athletic_point'] || '0',
                    noColor: true,
                  })
                }
              }

              for (let j in this.cmpPointList) {
                if (this.cmpPointList.length > 5) {

                } else {
                  this.pointList[this.cmpPointList[j].id_user - 1] = this.cmpPointList[j];
                  this.pointList[this.cmpPointList[j].id_user - 1].noColor = false;
                }
              }

              console.log('thispoointLIst', this.pointList)
              let counter = 0;
              for (let i in this.pointList) {
                if (this.pointList[i].athletic_point_result
                  && this.pointList[i].athletic_point_result === "0.00"
                  && this.pointList[i].technical_point_result
                  && this.pointList[i].technical_point_result === "0.00") {
                  this.finalScore = 10000;
                }
              }
              if (counter == 5) {
                this.finalScore = 1;
              }
              this.isLoading = false;
            })
            .catch(error => {
              console.log(error)
              this.isLoading = false;
            })
        })
        .catch(err => {
          console.log(err);
          if (err['status'] === 404) {
            console.log('sadasdasd');
            this.pointList = [];
            this.finalScore = 1001;

            this.cmpPointList = [];
            for (let i = 0; i < 8; i++) {
              if (i === 5) {
                this.pointList.push({
                  FAC_ATH: 0.3,
                  FAC_TECH: 0.7,
                  noColor: true
                })
              } else if (i < 5) {

                this.pointList.push({
                  technicalValue: 0,
                  athleticValue: 0,
                  noColor: true
                })
              } else if (i === 6) {
                this.pointList.push({
                  technical_point_result: '0',
                  athletic_point_result: '0',
                  noColor: true,
                })
              } else if (i === 7) {
                this.pointList.push({
                  technical_point: '0',
                  athletic_point: '0',
                  noColor: true,
                })
              }
            }

            for (let j in this.cmpPointList) {
              if (this.cmpPointList.length > 7) {

              } else {
                this.pointList[this.cmpPointList[j].id_user - 1] = this.cmpPointList[j];
                this.pointList[this.cmpPointList[j].id_user - 1].noColor = true;
              }
            }
          }
          this.isLoading = false;
        })
    })

    this.socket.on("reset-data-score", () => {

      this.userData.atlet_name = '',
        this.userData.kata_name = '',
        this.userData.kontingen = '',
        this.userData.attribute = 'AKA'
      this.pointList = [];
      this.finalScore = 1001;

      this.cmpPointList = [];
      for (let i = 0; i < 8; i++) {
        if (i === 5) {
          this.pointList.push({
            FAC_ATH: 0.3,
            FAC_TECH: 0.7,
            noColor: true
          })
        } else if (i < 5) {

          this.pointList.push({
            technicalValue: 0,
            athleticValue: 0,
            noColor: true
          })
        } else if (i === 6) {
          this.pointList.push({
            technical_point_result: '0',
            athletic_point_result: '0',
            noColor: true,
          })
        } else if (i === 7) {
          this.pointList.push({
            technical_point: '0',
            athletic_point: '0',
            noColor: true,
          })
        }
      }

      for (let j in this.cmpPointList) {
        if (this.cmpPointList.length > 7) {

        } else {
          this.pointList[this.cmpPointList[j].id_user - 1] = this.cmpPointList[j];
          this.pointList[this.cmpPointList[j].id_user - 1].noColor = true;
        }
      }

      console.log(this.pointList)
    })

    // remote control
    this.socket.on('listscore-link', (item: any) => {
      if (item) {
        this.routes.navigate([`/list-score/klasemen/${item.id}/${item.group_name}`]);
      } else {
        this.routes.navigate([`/list-score/klasemen/individual/head-to-head`]);
      }
    })
  }

  getSevenJury() {
    this.userService.getUsers()
      .then((res: any) => {
        this.juryList = res.result;
        console.log(this.juryList);

        this.isLoading = false;
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
