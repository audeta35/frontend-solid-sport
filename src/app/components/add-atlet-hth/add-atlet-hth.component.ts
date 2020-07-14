import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-atlet-hth',
  templateUrl: './add-atlet-hth.component.html',
  styleUrls: ['./add-atlet-hth.component.css']
})
export class AddAtletHthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


}
