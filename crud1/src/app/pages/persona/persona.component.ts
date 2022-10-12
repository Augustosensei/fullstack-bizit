import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../../_service/persona.service';
import { Persona } from '../../_model/persona';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private personaService: PersonaService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.personaService.listarPersona().subscribe( datos => {
      this.dataSource = new MatTableDataSource(datos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    
      console.table(datos);
    }  );


    this.personaService.getMensajeCambio().subscribe( mensanje => {
      this.snackbar.open(mensanje,'Persona',{duration: 3000})
    });

    this.personaService.getPersonaCambio().subscribe( datos => {
      this.dataSource = new MatTableDataSource(datos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.table(datos);
    }  );



  }

  public filtrar(valor: string){
    this.dataSource.filter = valor.trim().toUpperCase();
  }


  eliminar(id: number){
 
    this.personaService.eliminarPorId(id).pipe( switchMap( () => {
      return this.personaService.listarPersona();
    } ) ).subscribe( datos => {
    //  console.log('Se eliminó correctamente');

      this.personaService.setMensajeCambio('Se eliminó correctamente');
      this.personaService.setPersonaCambio(datos);
    } );
       
  
  }


}
