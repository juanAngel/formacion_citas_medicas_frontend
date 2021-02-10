import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../dataModel';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.sass']
})
export class RegisterDoctorComponent implements OnInit {
  name:string;
  lastName:string;
  user:string;
  password:string;
  numColegiado:string;


  constructor(private route: ActivatedRoute, 
              private router: Router,
              private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  
  async save(){
    if(this.name != null && this.lastName != null && this.user != null && this.password != null && this.numColegiado != null){
      return;
    }

    let doctor:Doctor = {
      id:0,
      nombre:this.name,
      apellidos:this.lastName,
      usuario:this.user,
      clave:this.password,
      numColegiado:this.numColegiado,
      pacientes:[],
      citas:[]
    };
    doctor = await this.doctorService.save(doctor);
    
    this.router.navigate(["/doctor",doctor.id]);
  }
}
