import { Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatAccordion} from '@angular/material/expansion';

import {Doctor,MedicalAppointment, Patient, Diagnostic} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"
import {MedicalAppointmentService} from "../medical-appointment.service"

import { PatientSearchDialogComponent } from '../patient-search-dialog/patient-search-dialog.component';

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
  medicalAppointmentDisplayedColumns: string[] = [ 'fechaHora', 'motivoCita', 'attibute11'];

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

    const dialogRef = this.dialog.open(PatientSearchDialogComponent, dialogConfig);

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
    let medicalAppointment:MedicalAppointment = null;

    this.doctorService.addCita(this.doctor.id,this.selectedPatient.id,medicalAppointment);
  }
  async removeMedicalAppointment(){
    this.doctor = await this.doctorService.removeCita(this.selectedMedicalAppointment);
  }
  async acceptMedicalAppointment(){

  }
  async setDiagnostic(medicalAppointment:MedicalAppointment,diagnostic:Diagnostic){

  }

}
