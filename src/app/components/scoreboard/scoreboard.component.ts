import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  Data = [
    {
      username: 'Muhammad deta sandi bima',
      kontingen: 'paspampres',
      kata: 'unsu',
      score: '69',
      belt: 'AKA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
