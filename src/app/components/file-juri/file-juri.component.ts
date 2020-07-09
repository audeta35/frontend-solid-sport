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
      status: 'online',
    },
    {
      username: 'Muleha',
      kontingen: 'Cilangkap',
      position: 'J2',
      status: 'offline',
    },
    {
      username: 'Budi sutoso',
      kontingen: 'Citeureup',
      position: 'J3',
      status: 'online',
    },
    {
      username: 'Hasan sadikin',
      kontingen: 'Cileungsi',
      position: 'J4',
      status: 'offline',
    },
    {
      username: 'Palepi hasan',
      kontingen: 'Cibitung',
      position: 'J5',
      status: 'online',
    },
    {
      username: 'Sutarno',
      kontingen: 'Jakarta',
      position: 'J6',
      status: 'online',
    },
    {
      username: 'Syauqi',
      kontingen: 'Cililin',
      position: 'J7',
      status: 'online',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
