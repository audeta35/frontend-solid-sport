
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './edit-admin.component';
import { routing } from './edit-admin.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [EditAdminComponent]
})
export class EditAdminComponentModule { }
