
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAtletHthComponent } from './add-atlet-hth.component';
import { routing } from './add-atlet-hth.component.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [AddAtletHthComponent]
})
export class AddAtletHthComponentModule { }
