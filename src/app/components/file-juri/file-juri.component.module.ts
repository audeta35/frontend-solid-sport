import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileJuriComponent } from './file-juri.component';
import { routing } from './file-juri.component.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule],
    declarations: [FileJuriComponent]
})
export class FileJuriComponentModule { }
