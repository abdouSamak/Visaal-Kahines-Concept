import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {PatientModel} from "../models/patient";
import {PatientsService} from "../services/patients.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  theme = true;

  constructor(public authService: AuthService, private router: Router, private patientsService: PatientsService) { }

  patients: PatientModel[];

  logout() {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.getAllPatients();
  }
  getAllPatients(): void {
    this.patientsService.getAllPatient$().subscribe(data => {
      this.patients = data;
    });
  }
  addPatient(): void {
    this.router.navigate(['add-patient']);
  }

  deletePatient(patient: PatientModel): void{
    this.patientsService.deletePatient$(patient.id)
      .subscribe(data => {
        console.log(data);
        this.getAllPatients();
      });
  }
  // tslint:disable-next-line:typedef
  updatePatient(patient: PatientModel){
    localStorage.removeItem('patienttId');
    localStorage.setItem('patientId', patient.id);
    this.router.navigate(['edit-product']);
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/login');
  }

}
