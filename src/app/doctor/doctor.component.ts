import { Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {MatAccordion} from '@angular/material/expansion';

import {Doctor,MedicalAppointment, Patient, Diagnostic} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"
import {MedicalAppointmentService} from "../medical-appointment.service"

import { PatientSearchDialogComponent } from '../patient-search-dialog/patient-search-dialog.component';
import { AcceptAppointmentDialogComponent } from '../accept-appointment-dialog/accept-appointment-dialog.component';
import { NewAppointmentDialogComponent } from '../new-appointment-dialog/new-appointment-dialog.component';
import { SetDiagnosticDialogComponent } from '../set-diagnostic-dialog/set-diagnostic-dialog.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  /*styleUrls: ['./doctor.component.sass'],*/
  styles:[":host { width: 100%; }"]
})
export class DoctorComponent implements OnInit {
  doctor:Doctor;
  selectedPatient:Patient;
  selectedMedicalAppointment:MedicalAppointment;

  //@HostBinding('class') classes = 'doctor-default';
  
  patientDisplayedColumns: string[] = [ 'name', 'lastName', 'NSS'];
  medicalAppointmentDisplayedColumns: string[] = [ 'fechaHora', 'motivoCita', 'patientName'];

  constructor(private route: ActivatedRoute, 
              private doctorService:DoctorService,
              private medicalAppointmentService:MedicalAppointmentService,
              private dialog:MatDialog) { }

  ngOnInit(): void {

    (async () => {
      this.doctor = await this.doctorService.getOne(this.route.snapshot.params["id"]);
      
    })()
    
  }
  private openPatientDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: ''
    };

    const dialogRef:MatDialogRef<PatientSearchDialogComponent,number> = this.dialog.open(PatientSearchDialogComponent, dialogConfig);

    return dialogRef.afterClosed()
  }
  private openAcceptAppointmentDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.selectedMedicalAppointment;

    const dialogRef:MatDialogRef<AcceptAppointmentDialogComponent,MedicalAppointment> = this.dialog.open(AcceptAppointmentDialogComponent, dialogConfig);

    return dialogRef.afterClosed()
  }
  private openNewAppointmentDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.selectedMedicalAppointment;

    const dialogRef:MatDialogRef<NewAppointmentDialogComponent,MedicalAppointment> = this.dialog.open(NewAppointmentDialogComponent, dialogConfig);

    return dialogRef.afterClosed()
  }
  private openSetDiagnosticDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.selectedMedicalAppointment;

    const dialogRef:MatDialogRef<SetDiagnosticDialogComponent,Diagnostic> = this.dialog.open(SetDiagnosticDialogComponent, dialogConfig);

    return dialogRef.afterClosed()
  }
  async addPatient(){
    this.openPatientDialog().subscribe(async id =>{
      this.doctor = await this.doctorService.addPaciente(this.doctor,id);
    });
  }
  async removePatient(){
    this.doctor = await this.doctorService.removePaciente(this.doctor,this.selectedPatient);
  }
  async addMedicalAppointment(){
    let medicalAppointment:MedicalAppointment = await this.openNewAppointmentDialog().toPromise();

    this.doctorService.addCita(this.doctor.id,this.selectedPatient.id,medicalAppointment);
  }
  async removeMedicalAppointment(){
    this.doctor = await this.doctorService.removeCita(this.selectedMedicalAppointment);
  }
  async acceptMedicalAppointment(){
    this.openAcceptAppointmentDialog().subscribe(async appointment =>{
      if(appointment != null){
        this.selectedMedicalAppointment.attibute11 = appointment.attibute11;
        this.selectedMedicalAppointment.fechaHora = appointment.fechaHora;

        this.medicalAppointmentService.updateDate(this.selectedMedicalAppointment.id,appointment.fechaHora);
      }
    });
  }
  async setDiagnostic(medicalAppointment:MedicalAppointment){

    this.openSetDiagnosticDialog().subscribe(diagnostic =>{
      this.medicalAppointmentService.setDiagnostic(this.selectedMedicalAppointment,{
        id:0,
        cita:0,
        enfermedad:diagnostic.enfermedad,
        valoracionEspecialista:diagnostic.valoracionEspecialista
      });
    })
  }
  getPatientName(patientId:number){
    let name = "";
    for (const patient of (this.doctor.pacientes as Patient[])) {
      if(patient.id == patientId){
        name = patient.nombre;
      }
    }
    return name;
  }
  timestampToDate(timestamp:number){
    if(timestamp != 0)
      return new Date(timestamp).toISOString();
    return "pending";
  }

}
