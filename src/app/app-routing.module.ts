import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
=======
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { NewskillComponent } from './components/skills/newskill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path: 'nuevopro', component: NewproyectoComponent},
  {path:'editpro/:id', component: EditproyectoComponent},
  {path:'nuevaskill', component: NewskillComponent},
  {path:'editskill/:id', component: EditskillComponent},
<<<<<<< HEAD
  {path:'editacercade/:id', component: EditAcercaDeComponent},
=======
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
