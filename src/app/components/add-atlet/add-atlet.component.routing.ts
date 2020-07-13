import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAtletComponent } from './add-atlet.component';

const routes: Routes = [
    { path: '', component: AddAtletComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);