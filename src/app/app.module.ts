import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { PoleComponent } from './pole/pole.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AddEditPoleComponent } from './add-edit-pole/add-edit-pole.component';
import { PoleServiceService } from './services/pole-service.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NormesComponent } from './normes/normes.component';
import { GestionNormesComponent } from './gestion-normes/gestion-normes.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { CritereComponent } from './critere/critere.component';
import { FilialeComponent } from './filiale/filiale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ReclamationComponent,
    PoleComponent,
    ProfileComponent,
    EmailComponent,
    EvaluationComponent,
    AddEditPoleComponent,
    NormesComponent,
    GestionNormesComponent,
    TestComponent,
    CritereComponent,
    FilialeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PoleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
