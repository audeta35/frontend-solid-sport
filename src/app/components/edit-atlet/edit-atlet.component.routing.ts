import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAtletComponent } from './edit-atlet.component';

const routes: Routes = [
    { path: '', component: EditAtletComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
