import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ParameterComponent } from './parameter/parameter.component';
import { PageUserComponent } from './page-user/page-user.component';
import { FieldDataUploadComponent } from './field-data-upload/field-data-upload.component';
import { DataCompareComponent } from './data-compare/data-compare.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';
import { AddEditUploadFileComponent } from './field-data-upload/add-edit-upload-file/add-edit-upload-file.component';
import { ApproveFileComponent } from './field-data-upload/approve-file/approve-file.component';
import { ApprovalDataComponent } from './field-data-upload/approve-file/approval-data/approval-data.component';
import { GlobalApproveComponent } from './field-data-upload/approve-file/global-approve/global-approve.component';
import { ValidateChoiceComponent } from './field-data-upload/approve-file/validate-choice/validate-choice.component';
import { CheckInputComponent } from './field-data-upload/check-input/check-input.component';
import { InputValidationComponent } from './field-data-upload/check-input/input-validation/input-validation.component';
import { FileCompareComponent } from './field-data-upload/file-compare/file-compare.component';
import { PdfCadatralMapComponent } from './field-data-upload/pdf-cadatral-map/pdf-cadatral-map.component';
import { PdfRepertoireComponent } from './field-data-upload/pdf-repertoire/pdf-repertoire.component';
import { PdfRepportComponent } from './field-data-upload/pdf-repport/pdf-repport.component';
import { PostObservationComponent } from './field-data-upload/post-observation/post-observation.component';
import { ProgressBarComponent } from './field-data-upload/progress-bar/progress-bar.component';
import { SharedfileComponent } from './field-data-upload/sharedfile/sharedfile.component';
import { ApprovalComponent } from './main-header/approval/approval.component';
import { SearchPageComponent } from './main-header/search-page/search-page.component';
import { ActiveDesacUserComponent } from './page-user/active-desac-user/active-desac-user.component';
import { AddEditPageUserComponent } from './page-user/add-edit-page-user/add-edit-page-user.component';
import { AffectProfileComponent } from './page-user/affect-profile/affect-profile.component';
import { PasswordStrengthBarComponent } from './page-user/password-strength-bar/password-strength-bar.component';
import { PwdFormComponent } from './page-user/pwd-form/pwd-form.component';
import { UpdateParameterComponent } from './parameter/update-parameter/update-parameter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParameterComponent,
    PageUserComponent,
    FieldDataUploadComponent,
    DataCompareComponent,
    MainHeaderComponent,
    MainPageComponent,
    FooterPageComponent,
    UserProfileInfoComponent,
    AddEditUploadFileComponent,
    ApproveFileComponent,
    ApprovalDataComponent,
    GlobalApproveComponent,
    ValidateChoiceComponent,
    CheckInputComponent,
    InputValidationComponent,
    FileCompareComponent,
    PdfCadatralMapComponent,
    PdfRepertoireComponent,
    PdfRepportComponent,
    PostObservationComponent,
    ProgressBarComponent,
    SharedfileComponent,
    ApprovalComponent,
    SearchPageComponent,
    ActiveDesacUserComponent,
    AddEditPageUserComponent,
    AffectProfileComponent,
    PasswordStrengthBarComponent,
    PwdFormComponent,
    UpdateParameterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
