import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScoreboardComponent } from './scoreboard.component';
import { routing } from './scoreboard.component.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule],
    declarations: [ScoreboardComponent]
})
export class ScoreboardComponentModule { }
