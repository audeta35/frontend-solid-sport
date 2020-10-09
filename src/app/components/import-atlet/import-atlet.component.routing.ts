import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportAtletComponent } from './import-atlet.component';

const routes: Routes = [
    { path: '', component: ImportAtletComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);