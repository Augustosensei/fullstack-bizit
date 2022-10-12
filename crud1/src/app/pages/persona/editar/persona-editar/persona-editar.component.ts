import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaService } from '../../../../_service/persona.service';
import { Persona } from '../../../../_model/persona';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css'],
})
export class PersonaEditarComponent implements OnInit {
  formularioPersona!: FormGroup;
  id!: number;
  modificar!: boolean;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private url: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.formularioInicial();
    this.url.params.subscribe( (datos: Params) =>{
      
      this.id = datos['id'];
      this.modificar = datos['id']!=null;
      this.inicializarFormulario();
    } );
    
  }
  
  
  private formularioInicial(){
    this.formularioPersona = new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      dni: new FormControl(''),
    });

  }

  inicializarFormulario() {
    this.personaService.obtenerPorId(this.id).subscribe((datos) => {
      this.formularioPersona = new FormGroup({
        id: new FormControl(datos.idPersona),
        nombre: new FormControl(datos.nombre),
        apellido: new FormControl(datos.apellido),
        dni: new FormControl(datos.dni),
      });
    });
  }

  accion() {
    let persona = new Persona();

    persona.idPersona = this.formularioPersona.value.id;
    persona.nombre = this.formularioPersona.value.nombre;
    persona.apellido = this.formularioPersona.value.apellido;
    persona.dni = this.formularioPersona.value.dni;


    if (this.modificar) {
       this.editar(persona);
    } else {
      this.guardar(persona);
    }

   // this.router.navigate(['listarPersonas']);
   this.formularioInicial();
  }
  
  
  private guardar(persona: Persona){
    
    this.personaService.guardar(persona).subscribe(() => {
      this.personaService.listarPersona().subscribe((datos) => {
        this.personaService.setPersonaCambio(datos);
        console.log('Se guardo correctamente');

         this.personaService.setMensajeCambio('Se guardo correctamente');
      });
    });
 }


 private editar(persona: Persona){

  this.personaService.modificar(persona).pipe( switchMap( () => {
    return this.personaService.listarPersona();
  } ) ).subscribe( datos => {
    console.log('Se modifico correctamente');
    this.personaService.setMensajeCambio('Se modificó correctamente');
    this.personaService.setPersonaCambio(datos);
  } );


 }


}
