import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { MatchService } from 'src/app/provider/services/match';

@Component({
  selector: 'app-file-atlet',
  templateUrl: './file-atlet.component.html',
  styleUrls: ['./file-atlet.component.css']
})
export class FileAtletComponent implements OnInit {

  atlet:any = [];
  group:any = [];
  match:any = [];
  totalMatch:any;

  constructor(
    private atletService: AtletService,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.getAllAtlet();
  }

  getAllAtlet() {
    this.atletService.getAtlet()
      .then((res: any) => {
        this.atlet = res.result.atlet;
        this.group = res.result.group;
        this.totalMatch = Object.keys(res.result.atlet);
        this.getAllMatch();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getAllMatch() {
    this.matchService.getMatch()
    .then((res:any) => {
      this.match = res.result;
      this.isMatch();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  isMatch() {
    console.log(this.totalMatch)
  }

  startGroupMatch(atlet) {
    this.matchService.addGroupMatch(atlet)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
