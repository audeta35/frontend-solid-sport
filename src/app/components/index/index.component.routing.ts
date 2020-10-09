import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

const routes: Routes = [
    { path: '', component: IndexComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);