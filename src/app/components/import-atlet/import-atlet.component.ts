import { Component, OnInit, ViewChild } from '@angular/core';
import { AtletService } from 'src/app/provider/services/atlet';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CSVRecord } from 'src/environments/csv';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Component({
  selector: 'app-import-atlet',
  templateUrl: './import-atlet.component.html',
  styleUrls: ['./import-atlet.component.css']
})
export class ImportAtletComponent implements OnInit {

  names: any = [];
  totalForm: number;
  isProcess: boolean = false;
  group: any = [];
  maxUserGroup:number = 10;

  constructor(
    private atletService: AtletService,
    private routes: Router,
  ) { }

  ngOnInit(): void { }

  records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any) {
    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    let i: number;

    let total = csvRecordsArray.length / this.maxUserGroup;
    let result = Math.ceil(total);

    for (i = 1; i <= result; i++) {
      this.group.push({
        name: `group ${i}`,
      });
    }

    for (i = 1; i <= csvRecordsArray.length; i++) {

      let curruntRecord = (<string>csvRecordsArray[i]).split(',');

      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.name = curruntRecord[0].trim();
        csvRecord.kontingen = curruntRecord[1].trim();
        csvRecord.attribute = curruntRecord[2].trim();
        csvRecord.kata = curruntRecord[3].trim();
        csvRecord.group = curruntRecord[4].trim();

        this.names.push({
          name: csvRecord.name,
          kontingen: csvRecord.kontingen,
          kata: csvRecord.kata,
          attribute: csvRecord.attribute,
          selected: false,
          group: `group ${csvRecord.group}`,
        });
      }
    }

    console.log(this.names);
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  addForm() {

    this.isProcess = true;

    setTimeout(() => {
      let i: number;

      for (i = 1; i <= this.totalForm; i++) {
        this.names.push({
          name: "",
          kontingen: "",
          kata: "",
          attribute: "",
          group: "null"
        })
      }

      this.isProcess = false;
    }, 500)
  }

  setForm() {
    this.names.push({
      name: "",
      kontingen: "",
      kata: "",
      attribute: "",
      group: "null"
    })
  }

  deleteForm(i) {

    this.names.splice(i, 1)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submitForm() {
    this.atletService.addAtletGroup(this.names, this.group)
      .then((res) => {
        console.log(res)
        Toast.fire({
          icon: 'success',
          title: `Data Atlet berhasil di tambah`,
        });
        this.routes.navigate(['file-atlet']);
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: `Kesalahan pada server`,
        });
        console.log(err)
      })
  }
}
