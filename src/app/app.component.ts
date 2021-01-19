import { Component } from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {

  title = 'frontEnd';
  sidebarOpened:boolean = false;
  mode:MatDrawerMode = "side";

  sidebarMenu:MenuEntry[] = [
    /*{routeLink:"/doctor",title:"doctor"},*/
    {routeLink:"/doctor-search",title:"buscar doctor"},
    {routeLink:"/patient-search",title:"buscar paciente"},
    {routeLink:"/register-doctor",title:"registrar doctor"},
    /*{routeLink:"/patient",title:"paciente"},*/
    {routeLink:"/register-patient",title:"registrar paciente"}
  ]

  public toggleSidebar(){
    this.sidebarOpened = (!this.sidebarOpened);
  }
}
interface MenuEntry{
  routeLink:string;
  title:string;
  icon?:string;
}