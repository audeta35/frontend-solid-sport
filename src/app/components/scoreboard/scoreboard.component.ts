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
  userData: any = {
    atlet_name: '',
    kata_name: '',
    kontingen: '',
    attribute: 'AKA'
  };
  pointList: any = [];
  cmpPointList: any = [];
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
          this.userData = res['result'][0];
          this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
            .then(response => {
              this.pointList = [] ;
              this.finalScore = response['result']['total_point'] || '';

              this.cmpPointList = response['result']['athlete_point_list'] ? [...response['result']['athlete_point_list']] : [...response['result']] ;
              for (let i = this.pointList.length; i < 10; i++) {
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
                } else if (i === 8) {
                  this.pointList.push({
                    technical_point_result: response['result']['technical_point_result'] || '0',
                    athletic_point_result: response['result']['athletic_point_result'] || '0',
                    noColor: true,
                  })
                } else if(i === 9) {
                  this.pointList.push({
                    technical_point: response['result']['technical_point'] || '0',
                    athletic_point: response['result']['athletic_point'] || '0',
                    noColor: true,
                  })
                }
              }

              for(let j in this.cmpPointList) {
                if(this.cmpPointList.length > 7) {

                } else {
                  this.pointList[this.cmpPointList[j].id_user - 1] = this.cmpPointList[j]; 
                  this.pointList[this.cmpPointList[j].id_user - 1].noColor = true;                  
                }
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
            this.pointList = [] ;
            this.finalScore = 0;

            this.cmpPointList = [] ;
            for (let i = 0; i < 10; i++) {
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
              } else if (i === 8) {
                this.pointList.push({
                  technical_point_result: '0',
                  athletic_point_result: '0',
                  noColor: true,
                })
              } else if(i === 9) {
                this.pointList.push({
                  technical_point: '0',
                  athletic_point: '0',
                  noColor: true,
                })
              }
            }

            for(let j in this.cmpPointList) {
              if(this.cmpPointList.length > 7) {

              } else {
                this.pointList[this.cmpPointList[j].id_user - 1] = this.cmpPointList[j]; 
                this.pointList[this.cmpPointList[j].id_user - 1].noColor = true;                  
              }
            }
            
            console.log(this.pointList)
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
