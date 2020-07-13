import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-atlet',
  templateUrl: './add-atlet.component.html',
  styleUrls: ['./add-atlet.component.css']
})
export class AddAtletComponent implements OnInit {
  names: any;
  selectedAll: any;

  constructor() { }

  ngOnInit(): void {
    this.names = [
      { name: 'Prashobh', selected: false },
      { name: 'Abraham', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'Natasha', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
      { name: 'karan', selected: false },
    ]
  }
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
