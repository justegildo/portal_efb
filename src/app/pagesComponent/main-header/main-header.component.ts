import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ApiProvidersService } from 'src/app/shared/apiProviders/api-providers.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private api: ApiProvidersService,
    private router: Router,
  ) { }

  username: string | undefined; permissions: any[] = []; progress = false; 
  //decoded = jwt_decode(this.Token());
  datas: any; 
  name: string | undefined; firstname: string | undefined; prenom: string | undefined; 
  email: string | undefined; contact: string | undefined; profile: string | undefined; 
  role: string | undefined ;
  decoded = jwt_decode(this.Token() || '')
  

  ngOnInit(): void {
    this.usersInfo();
    console.log(JSON.stringify(this.decoded, null, 2));
    localStorage.setItem('userInfo', JSON.stringify(this.decoded))
    
    
  }

  async usersInfo() {
    this.progress = true;
    await this.api.getUserInformation(this.user()).subscribe((response: any) => {
      this.progress = false;
      console.log(response);
      console.log(response.object);
      this.datas = response.object;
      this.name = this.datas.fullName ;
      this.firstname = this.datas.lastName
      this.email = this.datas.mail;
      this.profile = this.datas.profil; 
    }, (error) => {
      console.log(error);
      this.progress = false;
    }
    );
  }

  user() {
    const User = window.localStorage.getItem('username');
    return User;
  }

  deconnexion(){
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }


  Token() {
    const Token = localStorage.getItem('token');
    return Token;
  }

}
