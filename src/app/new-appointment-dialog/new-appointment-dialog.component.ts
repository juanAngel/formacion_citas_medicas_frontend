import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MedicalAppointment } from '../dataModel';

@Component({
  selector: 'app-new-appointment-dialog',
  templateUrl: './new-appointment-dialog.component.html',
  styleUrls: ['./new-appointment-dialog.component.sass']
})
export class NewAppointmentDialogComponent implements OnInit {
  reason:string;
  attibute11:string;
  dateTime:string;


  constructor(private dialogRef: MatDialogRef<NewAppointmentDialogComponent>) { }

  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.reason != null && this.dateTime != null){
      let appointment:MedicalAppointment = {
        attibute11:this.attibute11,
        motivoCita:this.reason,
        diagnostico: null,
        fechaHora: new Date(this.dateTime).getTime(),
        id:0,
        medico: null,
        paciente: null
      };
      this.dialogRef.close(appointment);
    }
  }

}
