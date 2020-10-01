import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  seDeconnecter(){
    this.authService.deconnecter();
    this.router.navigateByUrl('/login');
  }

}
