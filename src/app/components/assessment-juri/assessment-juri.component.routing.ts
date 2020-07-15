import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentJuriComponent } from './assessment-juri.component';

const routes: Routes = [
    { path: '', component: AssessmentJuriComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);