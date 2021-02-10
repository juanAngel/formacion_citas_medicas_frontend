import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router  , ActivatedRoute } from '@angular/router';

import {Doctor, MedicalAppointment, Patient} from "../dataModel"
import { DoctorSearchDialogComponent } from '../doctor-search-dialog/doctor-search-dialog.component';
import { DoctorService } from '../doctor.service';
import {PatientService} from "../patient.service"
import { ReasonAppointmentDialogComponent } from '../reason-appointment-dialog/reason-appointment-dialog.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {
  public patient:Patient;
  selectedDoctor:Doctor;
  selectedMedicalAppointment:MedicalAppointment;

  doctorDisplayedColumns: string[] = [ 'name', 'lastName', 'numColegiado'];
  citaDisplayedColumns: string[] = [ 'fechaHora', 'motivoCita', 'doctorName'];

  constructor(private route: ActivatedRoute,private patientService:PatientService,private doctorService:DoctorService,private dialog:MatDialog) { }

  ngOnInit(): void {

    (async () => {
      this.patient = await this.patientService.getOne(this.route.snapshot.params["id"]);
    })()
  }

  openDoctorDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: ''
    };

    const dialogRef:MatDialogRef<DoctorSearchDialogComponent,number> = this.dialog.open(DoctorSearchDialogComponent, dialogConfig);

    return dialogRef.afterClosed();
  }
  openReadonDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    /*
    dialogConfig.data = {
        id: 1,
        title: ''
    };*/

    const dialogRef:MatDialogRef<ReasonAppointmentDialogComponent,string> = this.dialog.open(ReasonAppointmentDialogComponent, dialogConfig);

    return dialogRef.afterClosed();
  }
  async addDoctor(){
    this.openDoctorDialog().subscribe(async id =>{
      this.patient = await this.patientService.addDoctor(this.patient.id,id);
    });
  }
  async removDoctor(){
    if(this.selectedDoctor == null)
      return;
    this.patient = await this.patientService.removeDoctor(this.patient.id,this.selectedDoctor.id);
    this.selectedDoctor = null;
  }
  async medicalAppointmentRequest(){
    if(this.selectedDoctor != null){
        let reason:string = await this.openReadonDialog().toPromise();
        if(reason != null)
          this.patient = await this.patientService.citaRequest(this.patient.id,this.selectedDoctor.id,reason);
        this.selectedDoctor = null;
    }
  }
  async removeMedicalAppointment(){
    if(this.selectedMedicalAppointment == null)
      return;
    this.patient = await this.patientService.cancelCita(this.selectedMedicalAppointment.id);
    this.selectedMedicalAppointment = null;
  }
  getDoctorName(doctorId:number){
    let name = "";
    for (const doctor of (this.patient.medicos as Doctor[])) {
      if(doctor.id == doctorId){
        name = doctor.nombre;
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
