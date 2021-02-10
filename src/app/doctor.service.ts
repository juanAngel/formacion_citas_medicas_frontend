
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {Doctor, Patient, Diagnostic, MedicalAppointment, User} from "./dataModel"
import config from "./config.json"

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private endpoint:string = '/medico';

  constructor(private http: HttpClient) { }

  public async getAll(){
    return this.http.get<Doctor[]>(config.endpointRoot+this.endpoint+"/").toPromise();
  }
  public async getOne(id:number){
    return this.http.get<Doctor>(config.endpointRoot+this.endpoint+"/"+id).toPromise();
  }
  public async save(doctor:Doctor){
    return this.http.post<Doctor>(config.endpointRoot+this.endpoint+"/",doctor).toPromise();
  }
  public async remove(doctor:Doctor){
    this.http.delete(config.endpointRoot+this.endpoint+"/"+doctor.id).toPromise();
  }
  public async addPaciente(doctor:Doctor|number,paciente:Patient|number):Promise<Doctor>{
    let pacienteID:number = typeof paciente == "number"?paciente:paciente.id;
    let medicoID: number = typeof doctor == "number"?doctor:doctor.id;
    return this.http.post<Doctor>(config.endpointRoot+this.endpoint+"/paciente/"+medicoID+"/",pacienteID).toPromise();
  }
  public async removePaciente(doctor:Doctor,paciente:Patient){
    let pacienteID:number = typeof paciente == "number"?paciente:paciente.id;
    let medicoID: number = typeof doctor == "number"?doctor:doctor.id;

    return this.http.delete<Doctor>(config.endpointRoot+this.endpoint+"/paciente/"+medicoID+"/"+pacienteID+"/").toPromise();
  }
  public async addCita(doctorId:number,pacienteId:number,cita:MedicalAppointment){
    return this.http.post<MedicalAppointment>(config.endpointRoot+this.endpoint+"/cita/"+doctorId+"/"+pacienteId+"/",cita).toPromise();
  }
  public async removeCita(cita:MedicalAppointment){
    return this.http.delete<Doctor>(config.endpointRoot+this.endpoint+"/cita/"+cita.id).toPromise();
  }
  public async findByNombre(nombre:string){
    return this.http.get<Doctor[]>(config.endpointRoot+this.endpoint+"/nombre/"+nombre).toPromise();
  }
  public async findByApellidos(apellido:string){
    return this.http.get<Doctor[]>(config.endpointRoot+this.endpoint+"/apellido/"+apellido).toPromise();
  }
  public async findByUsuario(usuario:string){
    return this.http.get<Doctor[]>(config.endpointRoot+this.endpoint+"/usuario/"+usuario).toPromise();
  }
  public async findByNumColegiado(numColegiado:string){
    return this.http.get<Doctor[]>(config.endpointRoot+this.endpoint+"/numColegiado/"+numColegiado).toPromise();
  }
}
