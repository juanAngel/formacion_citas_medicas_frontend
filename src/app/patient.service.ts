import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Doctor, Patient, Diagnostic, MedicalAppointment, User } from "./dataModel"
import config from "./config.json"

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private endpoint: string = '/paciente';

  constructor(private http: HttpClient) { }

  public async getAll() {
    return this.http.get<Patient[]>(config.endpointRoot + this.endpoint + "/").toPromise();
  }

  public async getOne(id: number) {
    return this.http.get<Patient>(config.endpointRoot + this.endpoint +"/" + id).toPromise();
  }

  public async save(patient: Patient) {
    return this.http.post<Patient>(config.endpointRoot+this.endpoint+"/",patient).toPromise();
  }

  public async remove(patient: Patient) {
    return this.http.delete(config.endpointRoot+this.endpoint+"/"+patient.id).toPromise();
  }

  public async addDoctor(pacienteID: number,medicoID: number) {
    //this.http.get<Doctor>(config.endpointRoot+"/medico/"+id).toPromise();
  }

  public async removeDoctor(pacienteID: number,medicoID: number) {
    //this.http.get<Doctor>(config.endpointRoot+"/medico/"+id).toPromise();
  }

  public async citaRequest(pacienteID: number,medicoID: number) {
    return this.http.post<Patient>(config.endpointRoot+this.endpoint+"/citaRequest/"+pacienteID+"/"+medicoID+"/",null).toPromise();
  }

  public async findByNombre(nombre:string){
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/nombre/"+nombre).toPromise();
  }

  public async findByApellidos(apellido:string){
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/apellido/"+apellido).toPromise();
  }

  public async findByUsuario(usuario:string){
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/usuario/"+usuario).toPromise();
  }

  public async findByTelefono(telefono:string) {
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/usuario/"+telefono).toPromise();
  }

  public async findByNumTarjeta(numTarjeta:string) {
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/numTarjeta/"+numTarjeta).toPromise();
  }

  public async findByNSS(NSS:string) {
    return this.http.get<Patient[]>(config.endpointRoot+this.endpoint+"/NSS/"+NSS).toPromise();
  }
}
