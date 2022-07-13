import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../_service/producto.service';
import { Producto } from '../../_model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];
  productosSeleccionados: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.inicializarProductos();
  }


   inicializarProductos(){
    this.productos = this.productoService.productos();
   }

  agregarProducto(p: Producto){
  this.productosSeleccionados.push(p);
  }

  eliminarProducto(i: number){
    this.productosSeleccionados.splice(i, 1);
    }

}
