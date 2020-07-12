
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditJuriComponent } from './edit-juri.component';
import { routing } from './edit-juri.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [EditJuriComponent]
})
export class EditJuriComponentModule { }
