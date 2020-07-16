import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListScoreComponent } from './list-score.component';

const routes: Routes = [
    { path: '', component: ListScoreComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
