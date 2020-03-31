import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message:string;
  userDetails;
  condition:boolean;
  allUser;
 
  constructor(private router:Router,private  service:UserService,private toastr:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {

    if(localStorage.getItem('token')==null){
      this.router.navigate(['login']);
    }
    
  }

  onLogout(){
    
    console.log("***************** "+localStorage.getItem('token'));
    
    this.http.post("https://localhost:44358/api/logout",{'username':localStorage.getItem('token')}).subscribe(
  );


    localStorage.removeItem('token');
    this.router.navigate(['login']);
    
  }

  ShowMessage(){
    this.toastr.success(this.message,'');
  }

  getalluser(){
    this.condition=true;
    this.service.getalluser().subscribe(
      res => {
        this.allUser = res;
        console.log("--------> "+res)
      },
      err => {
        console.log(err);
      },
    );
  }

  



  

  

}
