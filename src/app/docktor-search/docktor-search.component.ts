import { Component, OnInit } from '@angular/core';

import {Doctor} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}
/*
const ELEMENT_DATA: Doctor[] = [
  {id:0,nombre:"pepe",apellidos:"Perez Sanchez",usuario:"",clave:"",numColegiado:"z00000"}
];*/

@Component({
  selector: 'app-docktor-search',
  templateUrl: './docktor-search.component.html',
  styleUrls: ['./docktor-search.component.sass']
})
export class DocktorSearchComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'lastName', 'numColegiado'];
  dataSource:Doctor[];

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.dataSource = []
  }
  async searchDoctor(name:string){
    this.dataSource = await this.doctorService.findByNombre(name);
  }

}
