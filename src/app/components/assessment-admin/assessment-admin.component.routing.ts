import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentAdminComponent } from './assessment-admin.component';

const routes: Routes = [
    { path: '', component: AssessmentAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);