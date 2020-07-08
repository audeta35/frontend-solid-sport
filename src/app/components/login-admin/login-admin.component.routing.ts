import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminComponent } from './login-admin.component';

const routes: Routes = [
    { path: '', component: LoginAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);