import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medic } from "../../models/medic.model";


@Injectable({ providedIn: 'root' })
export class MedicService {
  constructor(private http: HttpClient) {}

  private apiUrl = `http://recrutamentomedtimeapi.azurewebsites.net/api/Medicos`;

  public getMedicsList() {
    return this.http.get<Medic[]>(this.apiUrl);
  }

  public postMedic(data) {    
    console.log(data);    
    return this.http.post(this.apiUrl, JSON.stringify(data));
  }    
}