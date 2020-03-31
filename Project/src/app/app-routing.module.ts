import {NgModule}  from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

const  routes: Routes=[
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard] },
]

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule{}
export const routingComponents = [LoginComponent,ProfileComponent]