import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { PersonaEditarComponent } from './pages/persona/editar/persona-editar/persona-editar.component';

const routes: Routes = [
  {path:'listarPersonas', component: PersonaComponent, children: [
    {path: 'nuevo', component: PersonaEditarComponent},
    {path: 'editar/:id', component: PersonaEditarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
