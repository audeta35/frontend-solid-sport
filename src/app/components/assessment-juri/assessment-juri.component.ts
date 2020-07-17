import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-assessment-juri',
  templateUrl: './assessment-juri.component.html',
  styleUrls: ['./assessment-juri.component.css']
})
export class AssessmentJuriComponent implements OnInit {

  constructor(
    private socket: Socket,
  ) { }

  ngOnInit(): void {
    this.socket.on('data-juri', () => {

    })
  }

  onSubmit() {
    // fungsi
    this.socket.emit('scoreboard');
    this.socket.emit('result-admin');
    this.socket.emit('result-juri');
  }

}
