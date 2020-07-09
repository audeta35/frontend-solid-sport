import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-juri',
  templateUrl: './file-juri.component.html',
  styleUrls: ['./file-juri.component.css']
})
export class FileJuriComponent implements OnInit {
  Data = [
    {
      username: 'Muhadek sadikin',
      kontingen: 'Cikarang',
      position: 'J1',
      tatami: 'AKA',
    },
    {
      username: 'Muleha',
      kontingen: 'Cilangkap',
      position: 'J2',
      tatami: 'AO',
    },
    {
      username: 'Budi sutoso',
      kontingen: 'Citeureup',
      position: 'J3',
      tatami: 'AO',
    },
    {
      username: 'Hasan sadikin',
      kontingen: 'Cileungsi',
      position: 'J4',
      tatami: 'AKA',
    },
    {
      username: 'Palepi hasan',
      kontingen: 'Cibitung',
      position: 'J5',
      tatami: 'AKA',
    },
    {
      username: 'Sutarno',
      kontingen: 'Jakarta',
      position: 'J6',
      tatami: 'AO',
    },
    {
      username: 'Syauqi',
      kontingen: 'Cililin',
      position: 'J7',
      tatami: 'AO',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
