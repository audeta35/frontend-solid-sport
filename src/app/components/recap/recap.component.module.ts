import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecapComponent } from './recap.component';
import { routing } from './recap.component.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintModule } from 'ngx-print';
@NgModule({
    imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule, NgxPaginationModule, NgxPrintModule],
    declarations: [RecapComponent]
})
export class RecapComponentModule { }
