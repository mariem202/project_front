import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CritereComponent } from './critere/critere.component';
import { EmailComponent } from './email/email.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FilialeComponent } from './filiale/filiale.component';
import { GestionNormesComponent } from './gestion-normes/gestion-normes.component';
import { HomeComponent } from './home/home.component';
import { NormesComponent } from './normes/normes.component';
import { PoleComponent } from './pole/pole.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rec',component:ReclamationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'pole',component:PoleComponent},
  {path:'mail',component:EmailComponent},
  {path:'evaluation',component:EvaluationComponent},
  {path:'norme',component:NormesComponent}, 
   {path:'gnorme',component:GestionNormesComponent},
   {path:'critere',component:CritereComponent},
   {path:'test',component:TestComponent},
   {path:'filiale',component:FilialeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
