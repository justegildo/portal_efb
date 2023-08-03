import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './entriesComponent/error/error.component';
import { LoginComponent } from './entriesComponent/login/login.component';
import { AuthGuardService } from './shared/apiProviders/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'procedure-d-enregistrement-collectif', loadChildren: () => import('./pagesComponent/main.module')
    .then(m => m.MainModule),// canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
