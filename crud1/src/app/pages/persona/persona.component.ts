import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../../_service/persona.service';
import { Persona } from '../../_model/persona';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  mostrarColumnas: string[] = ['idPersona', 'nombre', 'apellido', 'dni', 'acciones'];
  dataSource!: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  personas:Persona[] = [];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listarPersona().subscribe( datos => {
      this.dataSource = new MatTableDataSource(datos);
      this.dataSource.sort = this.sort;
    
      console.table(datos);
    }  );


  }


  public filtrar(valor: string){
  
    this.dataSource.filter = valor.trim().toUpperCase();

  }



}
