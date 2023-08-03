import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  username: string | undefined; perm: any[] = []; progress = false;
  
  
  

  constructor(

  ) { }

  ngOnInit(): void {
    
    
  }


  Token() {
    const Token = localStorage.getItem('token');
    return Token;
  }

}


