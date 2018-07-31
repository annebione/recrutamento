import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListComponent } from './components/list/list.component';
import { RegistrationComponent } from './components/registration/registration.component';

const medicRoutes: Routes = [
    { 
        path: 'list', 
        component: ListComponent,
        pathMatch: 'full'
    },
    { 
        path: 'registration', 
        component: RegistrationComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(medicRoutes) 
    ],
    exports: [ RouterModule ]
})
export class MedicRoutesModule { }