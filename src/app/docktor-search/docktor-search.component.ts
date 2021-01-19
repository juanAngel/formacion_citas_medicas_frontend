import { Component, OnInit } from '@angular/core';

import {Doctor,FormacionApi} from "../dataModel"

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Doctor[] = [
  {id:0,nombre:"pepe",apellidos:"Perez Sanchez",usuario:"",clave:"",numColegiado:"z00000"}
];

@Component({
  selector: 'app-docktor-search',
  templateUrl: './docktor-search.component.html',
  styleUrls: ['./docktor-search.component.sass']
})
export class DocktorSearchComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'lastName', 'numColegiado'];
  dataSource:Doctor[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = []
  }
  searchDoctor(name:string){
    this.dataSource = FormacionApi.getInstance().getDoctorByName(name);
  }

}
