import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-admin',
  templateUrl: './file-admin.component.html',
  styleUrls: ['./file-admin.component.css']
})
export class FileAdminComponent implements OnInit {
  Data = [
    {
      username: 'Muhadek sadikin',
      kontingen: 'Cikarang',
      position: 'J-1',
      status: 'online',
    },
    {
      username: 'Muleha',
      kontingen: 'Cilangkap',
      position: 'J-2',
      status: 'offline',
    },
    {
      username: 'Budi sutoso',
      kontingen: 'Citeureup',
      position: 'J-3',
      status: 'online',
    },
    {
      username: 'Hasan sadikin',
      kontingen: 'Cileungsi',
      position: 'J-4',
      status: 'offline',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
