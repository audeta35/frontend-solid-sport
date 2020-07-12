import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditJuriComponent } from './edit-juri.component';

const routes: Routes = [
  { path: '', component: EditJuriComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
