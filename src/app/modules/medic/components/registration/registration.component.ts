import { Component } from '@angular/core';

import { MedicService } from '../../../../shared/services/medic/medic.service';
import { Medic } from'../../../../shared/models/medic.model';

@Component({
  selector: 'registration-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user = new Medic;

  constructor(
    private medicService: MedicService
  ) {}

  submitRegister() {    
    this.user.id_medico = Math.max(Math.random()) + 10;

    //FIXME: Post not working?

    return this.medicService.postMedic(this.user)
      .subscribe(response => {
         console.warn('success', response);
      });
  }

}