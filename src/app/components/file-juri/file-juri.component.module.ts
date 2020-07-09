
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileJuriComponent } from './file-juri.component';
import { routing } from './file-juri.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [FileJuriComponent]
})
export class FileJuriComponentModule { }
