import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reason-appointment-dialog',
  templateUrl: './reason-appointment-dialog.component.html',
  styleUrls: ['./reason-appointment-dialog.component.sass']
})
export class ReasonAppointmentDialogComponent implements OnInit {
  reason:string;
  constructor(private dialogRef: MatDialogRef<ReasonAppointmentDialogComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.reason != null){
      this.dialogRef.close(this.reason);
    }
  }

}
