import { Injectable } from '@angular/core';
import { Alumno } from '../_model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

  getListarAlumnos(): Alumno[] {



   let alumnos: Alumno []= [

      { nombre: 'Oliver', apellido: 'Queen', nota: 10, materia: 'matematica' },
      { nombre: 'Jorge', apellido: 'Rodriguez', nota: 7, materia: 'ingles' },
      { nombre: 'Eva', apellido: 'Varela', nota: 10, materia: 'qa' },
      { nombre: 'Carlos', apellido: 'Perez', nota: 4, materia: 'qa' },
  
    ]
  
 return alumnos;

  
  }
   

}
