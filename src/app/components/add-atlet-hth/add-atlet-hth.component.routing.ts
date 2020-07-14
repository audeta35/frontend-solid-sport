import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAtletHthComponent } from './add-atlet-hth.component';

const routes: Routes = [
    { path: '', component: AddAtletHthComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);