import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { MatchService } from 'src/app/provider/services/match';
@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  data:any = []
  date = new Date();
  p: number = 1;
  fileName = `Rekap_pertandingan_${this.date.getDate()}_${this.date.getMonth()}_${this.date.getFullYear()}.xlsx`;
  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.getMatch();
  }

  getMatch() {
    this.matchService.getRecap()
    .then((res:any) => {
      this.data = res.result;
    })
    .catch((err) => {
      console.error(err);
    })
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
