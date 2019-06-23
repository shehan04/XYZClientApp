import { AccountModule } from './account/account.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'login',
  loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: '',
    loadChildren: () => import('./master/assets/assets.module').then(mod => mod.AssetsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
