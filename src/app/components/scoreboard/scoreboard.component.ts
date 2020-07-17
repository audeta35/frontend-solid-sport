import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  atlet: any;
  Data = [
    {
      username: 'Muhammad deta sandi bima',
      kontingen: 'paspampres',
      kata: 'unsu',
      score: '69',
      belt: 'AKA',
    },
  ];

  constructor(private socket: Socket) {
    socket.emit('scoreboard');
  }

  ngOnInit(): void {
    this.socket.on('data-score', (data) => {
      this.atlet = data;
      console.log(this.atlet);
    });
  }
}
