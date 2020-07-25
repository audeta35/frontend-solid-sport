import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuScoreboardComponent } from './menu-scoreboard.component';

const routes: Routes = [
    { path: '', component: MenuScoreboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
