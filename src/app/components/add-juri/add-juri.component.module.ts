
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJuriComponent } from './add-juri.component';
import { routing } from './add-juri.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [AddJuriComponent]
})
export class AddJuriComponentModule { }
