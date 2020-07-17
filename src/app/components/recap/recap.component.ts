import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  Data:any = [
    {
      username: 'ucup',
      type: 'solo',
      kata: 'unsu',
      tatami: 'Tatami 1',
      atribut: 'AKA',
      teknik: '45',
      atletik: '69',
      point: '89',
    },
    {
      username: 'ihsan',
      type: 'solo',
      kata: 'inkai',
      tatami: 'Tatami 1',
      atribut: 'AO',
      teknik: '45',
      atletik: '69',
      point: '89',
    },
  ]
  p: number = 1;
  fileName = 'ExcelSheet.xlsx';
  constructor() { }

  ngOnInit(): void {
  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
