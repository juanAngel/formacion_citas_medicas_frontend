import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';

import {Doctor} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent implements OnInit {
  public doctor:Doctor;

  constructor(private route: ActivatedRoute, private doctorService:DoctorService) { }

  ngOnInit(): void {

    (async () => {
      this.doctor = await this.doctorService.getOne(this.route.snapshot.params["id"]);

    })()
    
  }

}
