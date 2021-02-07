import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router  , ActivatedRoute } from '@angular/router';

import {Doctor, Patient} from "../dataModel"
import { DoctorSearchDialogComponent } from '../doctor-search-dialog/doctor-search-dialog.component';
import {PatientService} from "../patient.service"

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {
  public patient:Patient;
  doctorDisplayedColumns: string[] = [ 'name', 'lastName', 'numColegiado'];
  citaDisplayedColumns: string[] = [ 'fechaHora', 'motivoCita', 'attibute11'];

  constructor(private route: ActivatedRoute,private patientService:PatientService,private dialog:MatDialog) { }

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

    const dialogRef = this.dialog.open(DoctorSearchDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log(data);
    })
  }
}
