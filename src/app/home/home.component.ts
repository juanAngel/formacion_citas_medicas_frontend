import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  username:string;
  password:string;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private doctorService:DoctorService,
    private patientService:PatientService) { }

  ngOnInit(): void {
  }
  async loginDoctor(){
    if(this.username == null)
      return
    let usuarios = await  this.doctorService.findByUsuario(this.username);
    if(usuarios.length == 1){
      this.router.navigate(["/doctor",usuarios[0].id]);
    }
  }
  async loginPatient(){
    if(this.username == null)
      return
    let usuarios = await  this.patientService.findByUsuario(this.username);
    if(usuarios.length == 1){
      this.router.navigate(["/patient",usuarios[0].id]);
    }
  }

}
