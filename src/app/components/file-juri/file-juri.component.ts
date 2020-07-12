import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-juri',
  templateUrl: './file-juri.component.html',
  styleUrls: ['./file-juri.component.css']
})

export class FileJuriComponent implements OnInit {

  userData:any;

  constructor(
    private userService: UserService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUsers()
    .then((res:any) => {
      console.table(res.result);
      this.userData = res.result;
    })
    .catch((err) => {
      console.info(err);
    })
  }

  getDataUser(data) {
    this.routes.navigate(['edit-juri', {
      id: data.id_user,
      username: data.username,
      position: data.name,
      tatami: data.tatami
    }])
  }
}
