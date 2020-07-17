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
  }

  ngOnInit(): void {
    // this.socket.on('data-score', (data) => {
    //   this.atlet = data;
    //   console.log(this.atlet);
    // });

    this.isLoading = true;

    this.atletService.getAtletByMatch()
    .then(res => {
      console.log(res)
      this.userData = res['result'][0];
      console.log('========',this.userData);
      this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
      .then(response => {
        console.log('=== response', response)
        this.pointList = response['result']['athlete_point_list'];
        this.finalScore = response['result']['total_point'];

        for(let i = this.pointList.length; i < 10; i++) {
          console.log(i)
          if(i === 7) {
            this.pointList.push({
              FAC_ATH: 0.3,
              FAC_TECH: 0.7,
              noColor: true
            })
          } else if(i < 7){
            
            this.pointList.push({
              technicalValue: 0,
              athleticValue: 0
            })
          } else if(i > 7 && i < 9) {
            this.pointList.push({
              technical_point_result: response['result']['technical_point_result'],
              athletic_point_result: response['result']['athletic_point_result'],
              noColor: true,
            })
          } else {
            this.pointList.push({

              technical_point: response['result']['technical_point'],
              athletic_point: response['result']['athletic_point'],
              noColor: true
            })
          }
        }
        console.log(this.pointList)
        this.isLoading = false;
      })
      .catch(error => {

        console.log('=== error gan', error)
        if(error['status'] === 404) {
          for(let i = 0; i < 10; i++) {
            if(i == 7) {
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
      if(err['status'] === 404) {
        console.log('notFound');
      }
      this.isLoading = false;
    })

  }
}
