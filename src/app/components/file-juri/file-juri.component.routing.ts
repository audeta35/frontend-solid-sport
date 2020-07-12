import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileJuriComponent } from './file-juri.component';

const routes: Routes = [
    { path: '', component: FileJuriComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
