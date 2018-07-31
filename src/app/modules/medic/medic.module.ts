import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MedicRoutesModule } from './medic.routes'

import { RegistrationComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { CpfComponent } from '../../shared/components/cpf/cpf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MedicRoutesModule
  ],
  declarations: [RegistrationComponent, ListComponent,CpfComponent],
  exports: [RegistrationComponent, ListComponent]
})
export class MedicModule { }
