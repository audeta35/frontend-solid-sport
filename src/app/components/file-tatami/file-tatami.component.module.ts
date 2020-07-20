import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileTatamiComponent } from './file-tatami.component';
import { routing } from './file-tatami.component.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule],
    declarations: [FileTatamiComponent]
})
export class FileTatamiComponentModule { }
