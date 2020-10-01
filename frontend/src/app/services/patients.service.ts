import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {PatientModel} from "../models/patient";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


  patient: PatientModel;
  constructor(private http: HttpClient) { }

  apiRest: string = environment.urlDataBase;

  getAllPatient$(): Observable<PatientModel[]>{
    return (this.http.get(this.apiRest + 'patients') as Observable<PatientModel[]>);
  }

  getPatientById$(id: string): Observable<PatientModel>{
    return this.http.get(this.apiRest + 'patients' + '/' + id) as Observable<PatientModel>;
  }

  addPatient$(patient: PatientModel): Observable<any>{
    return this.http.post(this.apiRest+ 'patients' , patient);
  }

  deletePatient$(id: string): Observable<any>{
    return (this.http.delete(this.apiRest + 'patients' + '/' + id) as Observable<any>)
      .pipe(
        tap(patient => this.patient = patient)
      );
  }

  updatePatient$(patient: PatientModel, uid: string): Observable<any>{
    return (this.http.patch(this.apiRest + 'patients' + '/' + uid, patient)as Observable<any>);
  }
}
