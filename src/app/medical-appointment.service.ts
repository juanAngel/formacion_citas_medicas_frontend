import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {Doctor, Patient, Diagnostic, MedicalAppointment, User} from "./dataModel"
import config from "./config.json"

@Injectable({
  providedIn: 'root'
})
export class MedicalAppointmentService {
  private endpoint:string = '/cita';

  constructor(private http: HttpClient) { }


  public async getAll() {
    return this.http.get<Patient[]>(config.endpointRoot + this.endpoint + "/").toPromise();
  }

  public async getOne(id: number) {
    return this.http.get<MedicalAppointment>(config.endpointRoot + this.endpoint +"/" + id).toPromise();
  }
  public async updateDate(id:number,date:number) {
    return this.http.post<MedicalAppointment>(config.endpointRoot+this.endpoint+"/update/"+id,date).toPromise();
  }  

  public async remove(cita: MedicalAppointment) {
    return this.http.delete(config.endpointRoot+this.endpoint+"/"+cita.id).toPromise();
  }

  public async getAtDate(start:Date,end:Date) {
    return this.http.get<MedicalAppointment[]>(config.endpointRoot + this.endpoint +"/at/" + start.getTime()+"/"+end.getTime()).toPromise();
  }
  public async setDiagnostic(cita: MedicalAppointment, diagnostic:Diagnostic) {
    return this.http.post<MedicalAppointment>(config.endpointRoot + this.endpoint +"/diagnostic/"+cita.id+"/", diagnostic).toPromise();
  }
}
