
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentAdminComponent } from './assessment-admin.component';
import { routing } from './assessment-admin.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [AssessmentAdminComponent]
})
export class AssessmentAdminComponentModule { }
