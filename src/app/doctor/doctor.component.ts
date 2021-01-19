import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';

import {Doctor,FormacionApi} from "../dataModel"

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent implements OnInit {
  public doctor:Doctor;
  private api = FormacionApi.getInstance();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.doctor = this.api.getDoctor(this.route.snapshot.params["id"]);
  }

}
