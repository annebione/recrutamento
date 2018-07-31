import { Component, OnInit } from '@angular/core';
import { MedicService } from '../../../../shared/services/medic/medic.service';
import { Medic } from'../../../../shared/models/medic.model';

@Component({
  selector: 'list-medics',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Medic[] = [];

  constructor(
    private medicService: MedicService
  ) {}

  ngOnInit(): void {
    this.medicService.getMedicsList()
    .toPromise()
    .then(data => {
      this.users = this.users.concat(data);
    });
  }
}