import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAdminComponent } from './add-admin.component';

const routes: Routes = [
    { path: '', component: AddAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);