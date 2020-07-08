
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'index', loadChildren: () => import('src/app/components/index/index.component.module').then(m => m.IndexComponentModule) },
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
