import { Routes } from '@angular/router';
import { OperateComponent } from './operate/operate.component';
import { SubjectComponent } from './subject/subject.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { PipeComponent } from './pipe/pipe.component';

export const APP_ROUTES: Routes = [
    {path: 'operate', component: OperateComponent},
    {path: '', redirectTo: 'subject', pathMatch: 'full'},
    {path: 'subject', component: SubjectComponent},
    {path: 'combinelatest', component: CombineLatestComponent},
    {path: 'pipe', component: PipeComponent}
    // {path: '**', component: PageNotFoundComponent}
];