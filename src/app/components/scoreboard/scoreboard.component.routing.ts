import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreboardComponent } from './scoreboard.component';

const routes: Routes = [
    { path: '', component: ScoreboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
