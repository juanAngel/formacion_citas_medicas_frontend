import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';

import {Patient,FormacionApi} from "../dataModel"

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {
  public patient:Patient;
  private api = FormacionApi.getInstance();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patient = this.api.getPatient(this.route.snapshot.params["id"]);
  }
}
