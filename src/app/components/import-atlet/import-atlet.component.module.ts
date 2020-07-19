import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportAtletComponent } from './import-atlet.component';
import { routing } from './import-atlet.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [ImportAtletComponent]
})
export class ImportAtletComponentModule { }
