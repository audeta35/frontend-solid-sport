import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-score',
  templateUrl: './list-score.component.html',
  styleUrls: ['./list-score.component.css']
})
export class ListScoreComponent implements OnInit {
  Data = [
    {
      username: 'Bittersweet',
      kontingen: 'Bintaro',
      point: '67',
      attrib: 'AKA'
    },
    {
      username: 'By',
      kontingen: 'Bintaro',
      point: '55',
      attrib: 'AKA'
    },
    {
      username: 'Najla',
      kontingen: 'Bintaro',
      point: '47',
      attrib: 'AO'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
