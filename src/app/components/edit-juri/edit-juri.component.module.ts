
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditJuriComponent } from './edit-juri.component';
import { routing } from './edit-juri.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [EditJuriComponent]
})
export class EditJuriComponentModule { }
