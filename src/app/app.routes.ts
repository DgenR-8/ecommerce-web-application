import { Routes } from '@angular/router';
import { Customer } from './customer/customer';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [
    { path: '', component: Login},
    { path: 'customer', component: Customer },
    { path: 'admin', component: Admin },
    { path: 'login', component: Login },
    { path: 'signup', component: Signup }
];
