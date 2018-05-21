import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { UIInterviewComponent } from './UI Interview/uIInterview.component';

export const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: [

            {
                path: 'uIInterviewBoard',
                component: UIInterviewComponent,
            }          
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
