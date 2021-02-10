import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {Doctor,MedicalAppointment, Patient, Diagnostic} from "../dataModel"

@Component({
  selector: 'app-accept-appointment-dialog',
  templateUrl: './accept-appointment-dialog.component.html',
  styleUrls: ['./accept-appointment-dialog.component.sass']
})
export class AcceptAppointmentDialogComponent implements OnInit {
  attibute11:string;
  fechaHora:string;
  constructor(private dialogRef: MatDialogRef<AcceptAppointmentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private medicalAppointment: MedicalAppointment) { }

  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.fechaHora != null){
      console.log(""+this.fechaHora);
      this.medicalAppointment.fechaHora = new Date(this.fechaHora).getTime();
      this.medicalAppointment.attibute11 = this.attibute11;

      this.dialogRef.close(this.medicalAppointment);
    }
  }

}
