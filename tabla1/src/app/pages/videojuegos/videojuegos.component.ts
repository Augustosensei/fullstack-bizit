import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from '../../_services/videojuegos.service';
import { Videojuegos } from '../../_model/videojuegos';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listarJuegos: Videojuegos[]=[];
  
  constructor(private videoJuegoService: VideojuegosService) { }

  ngOnInit(): void {
    this.listar();
  }


  listar(){

    this.listarJuegos = this.videoJuegoService.listarVideojuegos();

  }



}
