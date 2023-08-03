import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProvidersService } from 'src/app/shared/apiProviders/api-providers.service';
//import {saveAs as importedSaveAs} from "file-saver";
import { Download } from 'src/app/shared/models/upload';

@Component({
  selector: 'app-field-data-upload',
  templateUrl: './field-data-upload.component.html',
  styleUrls: ['./field-data-upload.component.css']
})
export class FieldDataUploadComponent implements OnInit {

  datas: any[] = [];
  data: any[] = []
  model = new Download();

  _pagination = true;
  _progress = false;

  username: string | undefined;
  action: string | undefined;
  statut: string | undefined;
  code: string | undefined;
  libelle: string | undefined
  filename: string | undefined
  json_file_name: string | undefined
  excel_file_name: string | undefined
  zip_file_name: string | undefined
  pv_file_name: string | undefined
  selectedFileGeoJson: File | null = null;
  selectedFileExcel: File | null = null;
  selectedFileZip: File | null = null;
  selectedFilePv: File | null = null;

  
  choiceAction: string | undefined; choiceAction1: string | undefined; choiceAction2: string | undefined; choiceAction3: string | undefined;

  beginAt: any  = new Date(); beginAt1: any;
  endAt: any = new Date(); endAt1: any;
 

  constructor(
    private api: ApiProvidersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.User() || '';
    this.retrieveAlldatas();
  }

  Token() {
    const Token = window.localStorage.getItem('token');
    return Token;
  }

  async retrieveAlldatas() {
    this._progress = true;
    console.log(this.username);


    await this.api.allFileUploadrequestByUsername(
      this.username || '',
      'TOUT',
      this.statut || '',
      this.code || ''
    ).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.body);
        this.datas = res.body;
      },
      (error) => {
        console.log(error);
      }
    )
    
  }



  User() {
    const User = localStorage.getItem('username');
    return User;
  }


  rapport(filename: any) {
    this.api.checkGeojsonFileRepport(filename).subscribe((resultBlob: Blob) => {
      // const downloadURL = URL.createObjectURL(resultBlob);
      // window.open(downloadURL);
      //importedSaveAs(resultBlob, filename + ".pdf");
    });
  }

  rapport_comparaison(filename: any) {
    this.api.checkGeojsonFileRepportComp(filename).subscribe((resultBlob: Blob) => {
      // const downloadURL = URL.createObjectURL(resultBlob);
      // window.open(downloadURL);
      //importedSaveAs(resultBlob, filename + ".pdf");
    });
  }

  cadastralMap(filename: any) {
    this.api.checkGeojsonFileMap(filename).subscribe(() => {
      // const downloadURL = URL.createObjectURL(resultBlob);
      // window.open(downloadURL);
      //importedSaveAs(resultBlob, filename + ".pdf");
    });
  }


  onFileSelectedGeoJson(event: any) {
    this.selectedFileGeoJson = event.target.files[0];
    this.json_file_name = this.selectedFileGeoJson?.name
  }
  onFileSelectedExcel(event: any) {
    this.selectedFileExcel = event.target.files[0];
    this.excel_file_name = this.selectedFileExcel?.name
  }
  onFileSelectedZip(event: any) {
    this.selectedFileZip = event.target.files[0];
    this.zip_file_name = this.selectedFileZip?.name
  }

  sendOne() {
    console.log(this.model.projectCode);
    console.log(this.selectedFileExcel, this.excel_file_name);
    console.log(this.selectedFileGeoJson, this.json_file_name);
    console.log(this.selectedFileZip, this.zip_file_name);
    console.log(this.choiceAction);

    
    
    if (this.choiceAction === 'choiceOne') {
      this.model.action = 'ONLY_VALIDATION';
    } else if (this.choiceAction === 'choiceTwo') {
      this.model.action = 'VALIDATION_AND_PUBLICATION';
    } else if (this.choiceAction === 'choiceThree') {
      this.model.action = 'APPROVAL_AFTER_INSPECTION';
    }else if (this.choiceAction === 'choiceFour') {
      this.model.action = 'ONLY_VALIDATION_AFTER_INSPECTION';
    }

    console.log(this.model.action);

    this.api.uploadFile(
      this.selectedFileGeoJson, this.model.proces_verbal, this.selectedFileExcel, this.username, this.beginAt,
      this.endAt, this.model.projectCode, this.model.publicationLocation, this.model.action, this.model.oldFileName
    ).subscribe((response) => {
      console.log(response);
      

    },
      (error) => {
        console.error(error);
        
      })

   
  }

}
