
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAtletComponent } from './edit-atlet.component';
import { routing } from './edit-atlet.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [EditAtletComponent]
})
export class EditAtletComponentModule { }
