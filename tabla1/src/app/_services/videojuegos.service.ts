import { Injectable } from '@angular/core';
import { Videojuegos } from '../_model/videojuegos';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  constructor() { }


  listarVideojuegos(): Videojuegos[]{

    let videoJuegos: Videojuegos[] = [ { nombre: 'Age of Empire', precio: 300 },

    {

      nombre: 'COD',
      precio: 800

    },

    {

      nombre: 'Mario Bros',
      precio: 500

    },
    {

      nombre: 'Warcraft III',
      precio: 1200

    }
  ]

  return videoJuegos;

  }



}
