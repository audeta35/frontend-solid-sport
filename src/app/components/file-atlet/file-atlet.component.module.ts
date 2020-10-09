
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileAtletComponent } from './file-atlet.component';
import { routing } from './file-atlet.component.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [FileAtletComponent]
})
export class FileAtletComponentModule { }
