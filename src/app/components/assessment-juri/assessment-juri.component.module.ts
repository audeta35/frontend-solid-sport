
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentJuriComponent } from './assessment-juri.component';
import { routing } from './assessment-juri.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [AssessmentJuriComponent]
})
export class AssessmentJuriComponentModule { }
