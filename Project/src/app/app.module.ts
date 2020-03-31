import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule ,routingComponents}  from './app-routing.module'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { UserService } from './service/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
