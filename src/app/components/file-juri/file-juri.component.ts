import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-juri',
  templateUrl: './file-juri.component.html',
  styleUrls: ['./file-juri.component.css']
})
export class FileJuriComponent implements OnInit {
  Data = [
    {
      username: 'J1',
      tatami: '5',
    },
    {
      username: 'J2',
      tatami: '2',
    },
    {
      username: 'J3',
      tatami: '6',
    },
    {
      username: 'J4',
      tatami: '3',
    },
    {
      username: 'J5',
      tatami: '5',
    },
    {
      username: 'J6',
      tatami: '8',
    },
    {
      username: 'J7',
      tatami: '9',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
