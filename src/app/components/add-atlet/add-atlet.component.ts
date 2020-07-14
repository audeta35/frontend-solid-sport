import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-atlet',
  templateUrl: './add-atlet.component.html',
  styleUrls: ['./add-atlet.component.css']
})
export class AddAtletComponent implements OnInit {

  group: any = [];
  maxUserGroup: number = 10;
  names: any = [];
  totalForm: number;
  selectedAll: any;
  isProcess: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.names.every(function (item: any) {
      return item.selected == true;
    })
  }

  setForm() {

    this.isProcess = !this.isProcess;

    let total = this.totalForm / this.maxUserGroup;
    let result = Math.ceil(total);
    let i: number;

    setTimeout(() => {
      // set group

      for (i = 1; i <= result; i++) {
        this.group.push({
          name: `group ${i}`,
        })
      }

      for (i = 1; i <= result; i++) {
        for (let x = 1; x < this.maxUserGroup; x++) {

          this.names.push({
            name: "",
            kontingen: "",
            kata: "",
            atribute: "",
            selected: false,
            group: `group ${i}`
          })
        }
      }

      for (i = 0; i <= this.names.length; i++) {
        if (i > this.totalForm) {
          this.names.splice(this.totalForm, i);
        }
      }

      this.isProcess = !this.isProcess;
    }, 1000)
  }

  refresh() {
    this.group = [];
    this.names = [];
  }

  addGroup() {
    this.group.push({
      name : `group ${this.group.length + 1}`
    })
  }

  addForm(group) {

    this.names.push({
      name: "",
      kontingen: "",
      kata: "",
      atribute: "",
      group: group
    })
  }

  deleteGroup(id) {
    this.group.splice(id, 1);
  }

  deleteForm() {
    let i;
    let length: any = this.names.length
    for(i = 0; i < length; i++ ) {
      if(this.names[i].selected) {
        this.names.splice(i, 1); i--;
      }
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submitForm() {
    console.table(this.names);
  }

}