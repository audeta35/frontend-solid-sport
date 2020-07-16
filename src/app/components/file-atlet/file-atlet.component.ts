import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';

@Component({
  selector: 'app-file-atlet',
  templateUrl: './file-atlet.component.html',
  styleUrls: ['./file-atlet.component.css']
})
export class FileAtletComponent implements OnInit {

  atlet:any = [];
  group:any = [];

  constructor(
    private atletService: AtletService
  ) { }

  ngOnInit(): void {
    this.atletService.getAtlet()
    .then((res:any) => {
      this.atlet = res.result.atlet;
      this.group = res.result.group;
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
