
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJuriComponent } from './add-juri.component';
import { routing } from './add-juri.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [AddJuriComponent]
})
export class AddJuriComponentModule { }
