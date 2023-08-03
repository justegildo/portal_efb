import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FieldDataUploadComponent } from './field-data-upload/field-data-upload.component';
import { ParameterComponent } from './parameter/parameter.component';
import { DataCompareComponent } from './data-compare/data-compare.component';
import { PageUserComponent } from './page-user/page-user.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';

const routes: Routes = [
  {
    path: '', 
    component: MainHeaderComponent, 
    children: [
      { path: '', redirectTo: 'enregistrement', pathMatch: 'full'},
      { path: 'statistique', component: MainPageComponent },
      { path: 'enregistrement', component: FieldDataUploadComponent},
      { path: 'parameter', component: ParameterComponent},
      { path: 'visual-data', component: DataCompareComponent},
      { path: 'user-system', component: PageUserComponent},
      { path: 'profile-user', component: UserProfileInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
