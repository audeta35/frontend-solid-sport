
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'index', loadChildren: () => import('src/app/components/index/index.component.module').then(m => m.IndexComponentModule) },
  { path: 'file-juri', loadChildren: () => import('src/app/components/file-juri/file-juri.component.module').then(m => m.FileJuriComponentModule) },
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
