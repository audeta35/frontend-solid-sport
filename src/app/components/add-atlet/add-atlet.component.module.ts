
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAtletComponent } from './add-atlet.component';
import { routing } from './add-atlet.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [AddAtletComponent]
})
export class AddAtletComponentModule { }
