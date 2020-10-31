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

  async ngOnInit() {
    await this.getGroup();
    console.log(this.group);
  }

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

  getGroup = async () => {
    await this.atletService.getGroup()
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

  backToScore = async () => {
    await this.socket.emit("push-link-scoreboard");
    Swal.fire({
      icon: `success`,
      title: `Layar telah kembali ke papan skor`,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  async listScore(item:any) {
    await this.socket.emit("push-link-listscore", item)
    Swal.fire({
      icon: `success`,
      title: `${item.group_name.toUpperCase()}`,
      html: `Layar sedang menampilkan <b>${item.group_name.toUpperCase()}</b>`,
      timer: 1500,
      timerProgressBar: true,
    });

  }

}
