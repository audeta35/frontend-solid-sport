
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'index', loadChildren: () => import('src/app/components/index/index.component.module').then(m => m.IndexComponentModule) },
  { path: 'login-admin', loadChildren: () => import('src/app/components/login-admin/login-admin.component.module').then(m => m.LoginAdminComponentModule) },
  { path: 'file-juri', loadChildren: () => import('src/app/components/file-juri/file-juri.component.module').then(m => m.FileJuriComponentModule) },
  { path: 'edit-juri', loadChildren: () => import('src/app/components/edit-juri/edit-juri.component.module').then(m => m.EditJuriComponentModule) },
  { path: 'add-juri', loadChildren: () => import('src/app/components/add-juri/add-juri.component.module').then(m => m.AddJuriComponentModule) },
  { path: 'file-admin', loadChildren: () => import('src/app/components/file-admin/file-admin.component.module').then(m => m.FileAdminComponentModule) },
  { path: 'edit-admin', loadChildren: () => import('src/app/components/edit-admin/edit-admin.component.module').then(m => m.EditAdminComponentModule) },
  { path: 'add-admin', loadChildren: () => import('src/app/components/add-admin/add-admin.component.module').then(m => m.AddAdminComponentModule) },
  { path: 'file-atlet', loadChildren: () => import('src/app/components/file-atlet/file-atlet.component.module').then(m => m.FileAtletComponentModule) },
  { path: 'edit-atlet', loadChildren: () => import('src/app/components/edit-atlet/edit-atlet.component.module').then(m => m.EditAtletComponentModule) },
  { path: 'add-atlet', loadChildren: () => import('src/app/components/add-atlet/add-atlet.component.module').then(m => m.AddAtletComponentModule) },
  { path: 'import-atlet', loadChildren: () => import('src/app/components/import-atlet/import-atlet.component.module').then(m => m.ImportAtletComponentModule) },
  { path: 'add-atlet-hth', loadChildren: () => import('src/app/components/add-atlet-hth/add-atlet-hth.component.module').then(m => m.AddAtletHthComponentModule) },
  { path: 'file-tatami', loadChildren: () => import('src/app/components/file-tatami/file-tatami.component.module').then(m => m.FileTatamiComponentModule) },
  { path: 'assessment-admin', loadChildren: () => import('src/app/components/assessment-admin/assessment-admin.component.module').then(m => m.AssessmentAdminComponentModule) },
  { path: 'assessment-juri', loadChildren: () => import('src/app/components/assessment-juri/assessment-juri.component.module').then(m => m.AssessmentJuriComponentModule) },
  { path: 'scoreboard', loadChildren: () => import('src/app/components/scoreboard/scoreboard.component.module').then(m => m.ScoreboardComponentModule) },
  { path: 'list-score', loadChildren: () => import('src/app/components/list-score/list-score.component.module').then(m => m.ListScoreComponentModule) },
  { path: 'recap', loadChildren: () => import('src/app/components/recap/recap.component.module').then(m => m.RecapComponentModule) },
  { path: 'menu-scoreboard', loadChildren: () => import('src/app/components/menu-scoreboard/menu-scoreboard.component.module').then(m => m.MenuScoreboardComponentModule) },
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
