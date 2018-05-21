import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectModule } from 'ng2-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Ng2MultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { UIInterviewComponent } from './UI Interview/uIInterview.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        Ng2BootstrapModule,    
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,        
        SelectModule,
        Ng2MultiSelectDropDownModule,     
        BrowserAnimationsModule,     
        ModalModule.forRoot(),      
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent, 
        UIInterviewComponent,           
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },      
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
   
}
