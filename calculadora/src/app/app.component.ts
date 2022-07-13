import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  titulo!: string;

  valorUno!: number;
  valorDos!: number;
  resultadoPadre!: number;

  obtenerMensaje(obtener: any){
    this.titulo = obtener;
  }

  acciones(accion: number) {
    switch (accion) {
      case 1:
        this.resultadoPadre = this.valorDos + this.valorUno;

        break;
      case 2:
        this.resultadoPadre = this.valorDos - this.valorUno;

        break;
      case 3:
        this.resultadoPadre = this.valorDos * this.valorUno;

        break;
      case 4:
        this.resultadoPadre = this.valorDos / this.valorUno;
        break;
    }
  }
}
