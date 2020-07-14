import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-atlet',
  templateUrl: './file-atlet.component.html',
  styleUrls: ['./file-atlet.component.css']
})
export class FileAtletComponent implements OnInit {
  Data = [
    {
      username: 'Mijani ahmad',
      kontingen: 'Citeureup',
      kata: 'UNSU',
      tatami: 'AKA',
      step: '1',
      point: '31',
    },
    {
      username: 'Mujailah sulaiman',
      kontingen: 'cikurep',
      kata: 'UNSU',
      tatami: 'AO',
      step: '1',
      point: '43',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
