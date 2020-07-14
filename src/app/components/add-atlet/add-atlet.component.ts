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
  angka: number = 0;

  constructor() { }

  ngOnInit(): void {}

  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
      console.log(this.names)
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.names.every(function (item: any) {
      return item.selected == true;
    })
  }

  setForm() {

    let total = this.totalForm / this.maxUserGroup;
    let result = Math.ceil(total);
    let i: number;

    // set group

    for(i=1; i<=result; i++) {
      this.group.push({
        name : `group ${i}`,
        value : 0
      })
    }

    for(i=1; i<=result; i++) {
      for (let x = 1; x <= this.maxUserGroup; x++) {

        this.names.push({
          name: "",
          selected: false,
          group: `group ${i}`
        })
      }
    }

    for(i=0; i<=this.names.length; i++) {
      if (i < this.totalForm) {
        this.names.splice(this.totalForm, i);
      }
    }

    console.log(this.names)
  }

  addForm(group) {

    this.names.push({
      name: "",
      group: group
    })
  }

  deleteForm() {
    let i;
    let length: any = this.names.length
    for(i = 0; i < length; i++ ) {
      if(this.names[i].selected) {
        this.names.splice(i, 1); i--;
      }
    }

    console.log("names : ", this.names);
    console.log("group :", this.group);

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
