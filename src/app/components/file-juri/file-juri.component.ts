import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/services/users';

@Component({
  selector: 'app-file-juri',
  templateUrl: './file-juri.component.html',
  styleUrls: ['./file-juri.component.css']
})

export class FileJuriComponent implements OnInit {

  userData:any;

  constructor(
    private userService: UserService
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
}
