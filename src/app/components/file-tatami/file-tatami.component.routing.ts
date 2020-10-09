import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileTatamiComponent } from './file-tatami.component';

const routes: Routes = [
    { path: '', component: FileTatamiComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
