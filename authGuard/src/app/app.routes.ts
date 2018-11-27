import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
]

// https://netbasal.com/implementing-auth-guard-with-componentless-route-in-angular-b50a21f3bd77
// https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1