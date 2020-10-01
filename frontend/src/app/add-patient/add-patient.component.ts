import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../services/patients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private patientsService: PatientsService) {
  }

  addForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      service: ['', Validators.required],
      floor: ['', Validators.required],
      numberOfBed: ['', Validators.required],
      numberOfdevice: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addForm.valid) {
      this.patientsService.addPatient$(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/patients']);
        });
    }
  }
  // tslint:disable-next-line:typedef
  get f() { return this.addForm.controls; }

}
