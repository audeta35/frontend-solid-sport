import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListScoreComponent } from './list-score.component';
import { routing } from './list-score.component.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule],
    declarations: [ListScoreComponent]
})
export class ListScoreComponentModule { }
