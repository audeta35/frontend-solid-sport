import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AtletService } from 'src/app/provider/services/atlet';
import { PointService } from 'src/app/provider/services/points';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  isLoading: boolean = false;
  userData: any;
  pointList: any = [];
  tmpPointList: any = [];
  atlet: any;
  finalScore: number = 0;
  Data = [
    {
      username: 'Muhammad deta sandi bima',
      kontingen: 'paspampres',
      kata: 'unsu',
      score: '69',
      belt: 'AKA',
    },
  ];

  constructor(private socket: Socket, private atletService: AtletService, private pointService: PointService) {
    socket.emit('scoreboard');
    socket.on('data-score', () => {
      this.atletService.getAtletByMatch()
        .then(res => {
          console.log(res)
          this.userData = res['result'][0];
          console.log('========', this.userData);
          this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
            .then(response => {
              console.log('=== response point for scoreboard', response)
              this.pointList = response['result']['athlete_point_list'] || response['result'] ;
              this.finalScore = response['result']['total_point'] || '-';

              // for(let i in this.pointList) {
              //   if(this.pointList[i].athletic_result_status === 1) {
              //     this.pointList[this.pointList[i].id_user - 1].noColor = false;
              //   } else {
              //     this.pointList[i].noColor = true;
              //   }
              // }
              this.tmpPointList = response['result']['athlete_point_list'] ? [...response['result']['athlete_point_list']] : [...response['result']] ;
              console.log('-----', this.pointList)
              console.log('===tmp1', this.tmpPointList)
              for (let i = this.pointList.length; i < 10; i++) {
                console.log(i)
                if (i === 7) {
                  this.pointList.push({
                    FAC_ATH: 0.3,
                    FAC_TECH: 0.7,
                    noColor: true
                  })
                } else if (i < 7) {

                  this.pointList.push({
                    technicalValue: 0,
                    athleticValue: 0,
                    noColor: true
                  })
                } else if (i > 7 && i < 9) {
                  this.pointList.push({
                    technical_point_result: response['result']['technical_point_result'] || '0',
                    athletic_point_result: response['result']['athletic_point_result'] || '0',
                    noColor: true,
                  })
                } else {
                  this.pointList.push({

                    technical_point: response['result']['technical_point'] || '0',
                    athletic_point: response['result']['athletic_point'] || '0',
                    noColor: true
                  })
                }
              }

              console.log('===tmp2', this.tmpPointList)
              for(let i in this.pointList) {
                for(let j in this.tmpPointList) {
                  if(this.tmpPointList.length === 7) {
                    // this.pointList[this.tmpPointList[j].id_user - 1] = this.tmpPointList[j]; 
                    // this.pointList[this.tmpPointList[j].id_user - 1].noColor = true;
                    // if(parseInt(j) === parseInt(this.tmpPointList[j].id_user) - 1) {
                    //   continue
                    // }

                  } else {
                    this.pointList[this.tmpPointList[j].id_user - 1] = this.tmpPointList[j]; 
                    this.pointList[this.tmpPointList[j].id_user - 1].noColor = true;
                    if(parseInt(j) === parseInt(this.tmpPointList[j].id_user) - 1) {
                      continue
                    }
                    this.pointList[j] = {
                      technicalValue: 0,
                      athleticValue: 0,
                      noColor: true
                    };
                  }
                }

              }
              // this.pointList[i]
              console.log(this.pointList)
              this.isLoading = false;
            })
            .catch(error => {

              console.log('=== error gan', error)
              if (error['status'] === 404) {
                for (let i = 0; i < 10; i++) {
                  if (i == 7) {
                    this.pointList.push({
                      FAC_ATH: 0.3,
                      FAC_TECH: 0.7
                    })
                  } else {

                    this.pointList.push({
                      technicalValue: 0,
                      athleticValue: 0
                    })
                  }
                }
              }

              this.isLoading = false;
            })
        })
        .catch(err => {
          console.log('====error gan', err);
          if (err['status'] === 404) {
            console.log('notFound');
          }
          this.isLoading = false;
        })
    })
  }

  ngOnInit(): void {
    this.isLoading = true;
    console.log()
  }
}
