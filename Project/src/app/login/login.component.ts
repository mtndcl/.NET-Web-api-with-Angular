import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  label:string;
  postdata={
    username:'',
    password:''
  }
  
  constructor(private http:HttpClient,private router: Router) { 
   

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/profile');

  }

  LoginUser(){


     
      this.http.post("https://localhost:44358/api/login",this.postdata).subscribe(

      
        (res: any) => {

          if(res==400){
              console.log("user alrady in")
              this.label="User online in other device";
          }else if(res==404){
            console.log("Dont Such user")
            this.label="Dont have such a user";
          }else{
            console.log(res);
            localStorage.setItem('token', res.username);
            this.router.navigateByUrl('/profile');
          }
         
      },
      err => {
          console.log(err);
      }
    )

    this.router.navigateByUrl('/profile');



  }

}
