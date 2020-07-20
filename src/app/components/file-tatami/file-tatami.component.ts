import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-tatami',
  templateUrl: './file-tatami.component.html',
  styleUrls: ['./file-tatami.component.css']
})
export class FileTatamiComponent implements OnInit {
  Data = [
    {
      nameTatami: 'Tatami 1',
      class: 'Kata putra',
    },
    {
      nameTatami: 'Tatami 2',
      class: 'Kata putri indonesia',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
