import { Component, OnInit } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { Socket } from 'ngx-socket-io';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-menu-scoreboard',
  templateUrl: './menu-scoreboard.component.html',
  styleUrls: ['./menu-scoreboard.component.css']
})
export class MenuScoreboardComponent implements OnInit {

  group:any = [];

  constructor(
    private atletService: AtletService,
    private socket: Socket
  ) { }

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup = () => {
    this.atletService.getGroup()
    .then((res: any) => {
      this.group = res.result;
    })
    .catch((err) => {
      console.error(err)
    })
  }

  scoreboard = () => {
    window.open('/scoreboard');
  }

  backToScore = () => {
    this.socket.emit("push-link-scoreboard");
  }

  listScore(item:any) {
    this.socket.emit("push-link-listscore", item)
    Toast.fire({
      title: `papan skor sedang menampilkan ranking ${item.group_name}`,
    });

  }

}