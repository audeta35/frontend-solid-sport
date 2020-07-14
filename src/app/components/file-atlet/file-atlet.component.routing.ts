import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileAtletComponent } from './file-atlet.component';

const routes: Routes = [
    { path: '', component: FileAtletComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);