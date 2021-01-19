import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {MedicalAppointment,FormacionApi} from "../dataModel"

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.component.html',
  styleUrls: ['./medical-appointment.component.sass']
})
export class MedicalAppointmentComponent implements OnInit {

  public displayedColumns:string[];
  public dataSource:MedicalAppointment[];
  private api = FormacionApi.getInstance();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
