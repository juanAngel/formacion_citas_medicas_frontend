import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';

import {Patient} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {
  public patient:Patient;

  constructor(private route: ActivatedRoute,private patientService:PatientService) { }

  ngOnInit(): void {

    (async () => {
      this.patient = await this.patientService.getOne(this.route.snapshot.params["id"]);
    })()
    
  }
}
