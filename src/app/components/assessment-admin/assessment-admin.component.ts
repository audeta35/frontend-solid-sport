import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-assessment-admin',
  templateUrl: './assessment-admin.component.html',
  styleUrls: ['./assessment-admin.component.css'],
})
export class AssessmentAdminComponent implements OnInit {
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
  constructor(private socket: Socket) {
    socket.on("data-admin", () => {

    })
  }

  ngOnInit(): void {}

  onSubmit() {

    // fungsi

    this.socket.emit('scoreboard');
    this.socket.emit('result-admin');
    this.socket.emit('result-juri');
  }
}
