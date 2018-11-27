import { Routes } from '@angular/router';
import { OperateComponent } from './operate/operate.component';
import { SubjectComponent } from './subject/subject.component';

export const APP_ROUTES: Routes = [
    {path: 'operate', component: OperateComponent},
    {path: '', redirectTo: 'subject', pathMatch: 'full'},
    {path: 'subject', component: SubjectComponent}
    // {path: '**', component: PageNotFoundComponent}
];