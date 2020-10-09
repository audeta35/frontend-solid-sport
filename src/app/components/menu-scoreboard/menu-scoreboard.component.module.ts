import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing } from './menu-scoreboard.component.routing';
import { MenuScoreboardComponent } from './menu-scoreboard.component';

@NgModule({
  imports: [routing, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [MenuScoreboardComponent]
})
export class MenuScoreboardComponentModule { }
