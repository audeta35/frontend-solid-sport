import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileAdminComponent } from './file-admin.component';

const routes: Routes = [
    { path: '', component: FileAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);