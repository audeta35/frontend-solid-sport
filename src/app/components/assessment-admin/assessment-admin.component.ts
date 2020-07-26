import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AtletService } from 'src/app/provider/services/atlet';
import { PointService } from 'src/app/provider/services/points';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});
@Component({
  selector: 'app-assessment-admin',
  templateUrl: './assessment-admin.component.html',
  styleUrls: ['./assessment-admin.component.css'],
})
export class AssessmentAdminComponent implements OnInit {
  isLoading: boolean = false;
  userData: any = {};
  optionValue: any = [];
  originalOptionValue: any = [];
  userPoint: any = [];
  cmpUserPoint: any = []
  isFound: boolean = false;
  Data = [
    {
      juri: 'J-1',
    },
    {
      juri: 'J-2',
    },
    {
      juri: 'J-3',
    },
    {
      juri: 'J-4',
    },
    {
      juri: 'J-5',
    },
    {
      juri: 'J-6',
    },
    {
      juri: 'J-7',
    },
  ];
  payload = {
    matchId: 0,
    athleteId: 0,
    adminPointList: []
  }
  constructor(private socket: Socket, private atletService: AtletService, private pointService: PointService) {
    this.socket.emit("result-admin");
    this.socket.on("data-admin", () => {
      this.atletService.getAtletByMatch()
        .then((res: any) => {
          this.userData = {};
          this.optionValue = [];
          this.originalOptionValue = [];
          this.userPoint = [];
          this.cmpUserPoint = []

          this.userData = res['result'][0];


          this.payload.matchId = this.userData.id_match;
          this.payload.athleteId = this.userData.id_atlet;

          this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
            .then((response: any) => {
              this.userPoint = response['result']['athlete_point_list'] || response['result'] || [];
              this.cmpUserPoint = [...this.userPoint];
              if (this.userPoint.length < 1) {
                for (let i = 0; i < 7; i++) {
                  this.optionValue.push({
                    userId: i + 1,
                    data: []
                  });

                  for (let j = 5.0; j < 10; j = j + 0.2) {
                    let point = j.toFixed(1);
                    this.optionValue[i].data.push({ point: point });
                  }
                }
              } else {
                for (let i = 0; i < 7; i++) {

                  this.isFound = false;
                  for (let index in this.userPoint) {
                    if (this.userPoint[index].id_user - 1 === i) {
                      this.isFound = true;

                      this.optionValue.push({
                        userId: this.userPoint[index].id_user,
                        data: [],
                        isFound: true
                      });
                    }
                  }
                  if (!this.isFound) {
                    this.optionValue.push({
                      userId: (i + 1) * 10,
                      data: []
                    });
                  }
                  for (let j = 5.0; j < 10; j = j + 0.2) {
                    let point = j.toFixed(1);
                    this.optionValue[i].data.push({ point: point });
                  }
                }

                for (let i in this.optionValue) {
                  if (this.userPoint[i]) {
                    for (let j in this.optionValue[i].data) {
                      let data = this.optionValue[i].data[j];
                      if (this.userPoint[i].technical_result.toFixed(1) === data.point) {
                        this.optionValue[this.userPoint[i].id_user - 1].data[j].selectedTechnical = true;
                        this.payload.adminPointList[this.userPoint[i].id_user - 1].techValue = data.point;
                        if (this.userPoint[i].athletic_result.toFixed(1) === data.point) {
                          this.optionValue[this.userPoint[i].id_user - 1].data[j].selectedAthletic = true;
                          this.payload.adminPointList[this.userPoint[i].id_user - 1].athValue = data.point;
                        }
                      }
                      if (this.userPoint[i].athletic_result.toFixed(1) === data.point) {
                        this.optionValue[this.userPoint[i].id_user - 1].data[j].selectedAthletic = true;
                        this.payload.adminPointList[this.userPoint[i].id_user - 1].athValue = data.point;
                        if (this.userPoint[i].technical_result.toFixed(1) === data.point) {
                          this.optionValue[this.userPoint[i].id_user - 1].data[j].selectedTechnical = true;
                          this.payload.adminPointList[this.userPoint[i].id_user - 1].techValue = data.point;
                        }
                      }
                    }
                  }
                }
              }
              console.log(this.optionValue)
              this.isLoading = false;
            })
            .catch(error => {
              console.log(error)
              if (error['status'] === 404) {
                for (let i = 0; i < 7; i++) {
                  this.optionValue.push({
                    userId: i + 1,
                    data: []
                  });

                  for (let j = 5.0; j < 10; j = j + 0.2) {
                    let point = j.toFixed(1);
                    this.optionValue[i].data.push({ point: point });
                  }
                }
              }
              this.isLoading = false;
            })
        })
        .catch(err => {
          if (err['status'] === 404) {
            console.log('notFound');
            for (let i = 0; i < 7; i++) {
              this.optionValue.push({
                userId: i + 1,
                data: []
              });

              for (let j = 5.0; j < 10; j = j + 0.2) {
                let point = j.toFixed(1);
                this.optionValue[i].data.push({ point: point });
              }
            }
          }
          console.log(err);
          this.isLoading = false;
        })
    })

    this.socket.on("reset-data-admin", () => {
      console.log('realtime reset')

      this.userData = {};
      this.optionValue = [];
      this.originalOptionValue = [];
      this.userPoint = [];
      this.cmpUserPoint = [];

      for (let i = 0; i < 7; i++) {
        this.optionValue.push({
          userId: i + 1,
          data: []
        });

        for (let j = 5.0; j < 10; j = j + 0.2) {
          let point = j.toFixed(1);
          this.optionValue[i].data.push({ point: point });
        }
      }
            
    })
  }

  ngOnInit(): void {
    for(let i = 1; i < 8; i++) {
      this.payload.adminPointList.push({
        userId: i,
        techValue: 0,
        athValue: 0,
      })
    }
    this.isLoading = true;

  }

  _handleSelectPoint(cat, index, point ) {
    if(cat === 'tech') {
      this.payload.adminPointList[index].techValue = point;
    } else {
      this.payload.adminPointList[index].athValue = point;
    }
  }

  onSubmit() {
    this.pointService.doPointByAdmin(this.payload)
    .then(res => {
      this.socket.emit('result-admin');
      this.socket.emit('scoreboard');
      
    })
    .catch(err => {
      console.log(err);
    })
  }

  athleteReset() {

    if(this.userData) {
      let counter = 0;
      for(let i in this.optionValue) {
        for(let j in this.optionValue[i].data) {
          if(this.optionValue[i].data[j].selectedTechnical) {
            counter++;
          }
        }
      }
      if(counter === 7) {
        this.pointService.changeAthleteAssessment(this.userData.id_atlet)
        .then(res => {
          console.log(res);
          this.socket.emit("reset-admin")
        })
        .catch(err => {
          console.log(err);
          if(err['status'] === 404) {
            console.log('== masuk gag 404')
            
            this.userData = {};
            this.optionValue = [];
            this.originalOptionValue = [];
            this.socket.emit("reset-scoreboard")
            this.socket.emit("reset-admin")
            this.socket.emit("reset-juri")
            this.userPoint = [];
            this.cmpUserPoint = [];
            
            this.isLoading = true;


            for (let i = 0; i < 7; i++) {
              this.optionValue.push({
                userId: i + 1,
                data: []
              });
  
              for (let j = 5.0; j < 10; j = j + 0.2) {
                let point = j.toFixed(1);
                this.optionValue[i].data.push({ point: point });
              }
            }
          }
  
          this.isLoading = false;
          console.log(this.optionValue)
        })
      } else {
        Toast.fire({
          icon: 'info',
          text:
            'Mohon lengkapi penilaian atlet terlebih dahulu',
        });
      }
    } else {
      Toast.fire({
        icon: 'info',
        text:
          'Mohon lengkapi penilaian atlet terlebih dahulu',
      });
    }
  }
  
}
