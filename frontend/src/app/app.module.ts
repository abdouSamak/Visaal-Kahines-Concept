import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddPatientComponent } from './add-patient/add-patient.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {environment} from "../environments/environment";
import {AngularFireModule} from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatMenuModule,
    MatIconModule,
    NzMenuModule,
    NzSwitchModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
