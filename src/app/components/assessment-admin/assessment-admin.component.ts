import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-admin',
  templateUrl: './assessment-admin.component.html',
  styleUrls: ['./assessment-admin.component.css']
})
export class AssessmentAdminComponent implements OnInit {
  Data = [
    {
      juri: 'J-1'
    },
    {
      juri: 'J-2'
    },
    {
      juri: 'J-3'
    },
    {
      juri: 'J-4'
    },
    {
      juri: 'J-5'
    },
    {
      juri: 'J-6'
    },
    {
      juri: 'J-7'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
