import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }




  getalluser(){

    return this.http.get('https://localhost:44358/api/alluser');
  }


}
