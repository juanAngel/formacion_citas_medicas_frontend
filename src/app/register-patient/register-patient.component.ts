import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { DoctorService } from '../doctor.service';
import {Patient} from "../dataModel"
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.sass']
})
export class RegisterPatientComponent implements OnInit {
  name:string;
  lastName:string;
  user:string;
  pass:string;
  NSS:string;
  numTarjeta:string;
  telefono:string;
  direccion:string;


  constructor(private route: ActivatedRoute, 
              private router: Router,
              private patientService:PatientService) { }

  ngOnInit(): void {
  }
  async save(){
    let patient:Patient = {
      id:0,
      nombre:this.name,
      apellidos:this.lastName,
      usuario:this.user,
      clave:this.pass,
      NSS:this.NSS,
      numTarjeta:this.numTarjeta,
      telefono:this.telefono,
      direccion:this.direccion,
      medicos:[],
      citas:[]
    };
    patient = await this.patientService.save(patient);

    this.router.navigate(["/patient",patient.id]);
  }

}
