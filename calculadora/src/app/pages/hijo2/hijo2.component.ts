import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @Output() enviar = new EventEmitter();


  tituloHijo = 'Calculadora desde el hijo'
  mensaje(){
    this.enviar.emit(this.tituloHijo);
  }


}
