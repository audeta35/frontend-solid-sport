import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AtletService } from 'src/app/provider/services/atlet';
import { PointService } from 'src/app/provider/services/points';

@Component({
  selector: 'app-assessment-admin',
  templateUrl: './assessment-admin.component.html',
  styleUrls: ['./assessment-admin.component.css'],
})
export class AssessmentAdminComponent implements OnInit {
  isLoading: boolean = false;
  userData: any = {}  ;
  optionValue: any = [{
    data: [{
      point: '',
      selectedAthletic: false,
      selectedTechnical: false,
    }],
    point: '',
    userId: 1
  }];
  originalOptionValue: any = [];
  userPoint: any = [];

  Data = [
    {
      juri: 'j1',
    },
    {
      juri: 'j2',
    },
    {
      juri: 'j3',
    },
    {
      juri: 'j4',
    },
    {
      juri: 'j5',
    },
    {
      juri: 'j6',
    },
    {
      juri: 'j7',
    },
  ];
  constructor(private socket: Socket, private atletService: AtletService, private pointService: PointService) {
    this.socket.emit("result-admin");
    this.socket.on("data-admin", () => {
      this.atletService.getAtletByMatch()
        .then((res: any) => {
          this.userData = res['result'][0];
          this.pointService.getPointForScoreboard(this.userData.id_atlet, this.userData.id_match)
            .then((response: any) => {
              this.userPoint = response['result']['athlete_point_list'];
              for(let i = 0; i < this.userPoint.length; i++) {
                this.optionValue.push({ 
                  userId: this.userPoint[i].id_user + 1,
                  data: []
                });
                
                for (let j = 5.0; j < 10; j = j + 0.2) {
                  let point = j.toFixed(1);
                  this.optionValue[i].data.push({ point: point });
                  if(this.userPoint[i].technical_result.toFixed(1) === point) {
                    this.optionValue[i].data[this.optionValue[i].data.length - 1].selectedTechnical = true;                    
                    if(this.userPoint[i].athletic_result.toFixed(1) === point) {
                      this.optionValue[i].data[this.optionValue[i].data.length - 1].selectedAthletic = true;                                          
                    }
                  }
                  if(this.userPoint[i].athletic_result.toFixed(1) === point) {
                    this.optionValue[i].data[this.optionValue[i].data.length - 1].selectedAthletic = true;                    
                    if(this.userPoint[i].technical_result.toFixed(1) === point) {
                      this.optionValue[i].data[this.optionValue[i].data.length - 1].selectedTechnical = true;                                          
                    }
                  }
                }
              }

              this.isLoading = false;
            })
            .catch(error => {
              if (error['status'] === 404) {
                for (let i = 5.0; i < 10; i = i + 0.2) {
                  let point = i.toFixed(1);
                  this.optionValue.push({
                    point: point,
                    selected: false
                  });
                }
              }
              this.isLoading = false;
            })
        })
        .catch(err => {
          if (err['status'] === 404) {
            console.log('notFound');
          }
          console.log(err);
          this.isLoading = false;
        })
    })
  }

  ngOnInit(): void {

    console.log(this.optionValue)
    this.isLoading = true;

  }

  onSubmit() {

    // fungsi

    this.socket.emit('scoreboard');
    this.socket.emit('result-admin');
    this.socket.emit('result-juri');
  }
}
