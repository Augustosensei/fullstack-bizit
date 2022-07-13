import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../_service/alumno.service';
import { Alumno } from '../../_model/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {


  alumnos: Alumno[] = []; 

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {

    this.alumnos = this.alumnoService.getListarAlumnos();

  }

}
