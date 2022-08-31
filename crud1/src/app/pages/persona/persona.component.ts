import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../_service/persona.service';
import { Persona } from '../../_model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas:Persona[] = [];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listarPersona().subscribe( datos => {
      this.personas = datos;
      console.log(datos);
    }  );


  }

}
