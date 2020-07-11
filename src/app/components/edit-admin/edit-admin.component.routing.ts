import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAdminComponent } from './edit-admin.component';

const routes: Routes = [
    { path: '', component: EditAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);