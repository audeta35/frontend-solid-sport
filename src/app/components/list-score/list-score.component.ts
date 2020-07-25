import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router, ActivatedRoute } from '@angular/router';
import { AtletService } from 'src/app/provider/services/atlet';

@Component({
  selector: 'app-list-score',
  templateUrl: './list-score.component.html',
  styleUrls: ['./list-score.component.css']
})
export class ListScoreComponent implements OnInit {
  ranking: any = [];
  idGroup: number;
  klasemen: string;
  constructor(private atletService: AtletService, private socket: Socket, private routes: Router, private router: ActivatedRoute) {
    this.router.params.subscribe((params:any) => {
      this.idGroup = params.id;
      this.klasemen = params.group;
    });
  }

  ngOnInit(): void {
    this.getRank();
    this.socket.on("scoreboard-link", () => {
      this.routes.navigate(['/scoreboard']);
    })
  }

  getRank = () => {
    this.atletService.getRanking(this.idGroup)
    .then((res:any) => {
      this.ranking = res.result;
      console.log(this.ranking);
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
