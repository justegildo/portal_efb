import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProvidersService } from 'src/app/shared/apiProviders/api-providers.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  hide = true;
  //version;
  _progress = false;


  constructor( 
    private api: ApiProvidersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.user.username, this.user.password)
      this._progress = true;
      this.api.login(this.user).subscribe(
        (data: any) => {
          this._progress = true;
          console.log(data);
          console.log(data?.token);
          this.router.navigate(['/procedure-d-enregistrement-collectif/statistique']);
          //localStorage.setItem('data', JSON.stringify(data));
          localStorage.setItem('token', data?.token);
          localStorage.setItem('username', this.user.username || '');
          this.user.username = '';
          this.user.password = '';
        },
      (error) => { 
        console.log(error);
        this._progress = false;
      }
    )

    
  }

}
