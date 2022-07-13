import { Injectable } from '@angular/core';
import { Producto } from '../_model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }


  productos(): Producto[]{
 

    let productos: Producto[] = [
      {
        nombre: 'Camisa',
        marca: 'Lucas',
        precio: 7000
      },
      {
        nombre: 'Remera',
        marca: 'Bizit',
        precio: 15000
      },
      {
        nombre: 'Pantalon',
        marca: 'S',
        precio: 9000
      }
  
    ]


return productos;


  }


}
