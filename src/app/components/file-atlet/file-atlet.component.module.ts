
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileAtletComponent } from './file-atlet.component';
import { routing } from './file-atlet.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [FileAtletComponent]
})
export class FileAtletComponentModule { }
