import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJuriComponent } from './add-juri.component';

const routes: Routes = [
    { path: '', component: AddJuriComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);