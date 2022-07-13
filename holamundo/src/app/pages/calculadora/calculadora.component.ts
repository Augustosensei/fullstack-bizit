import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valorUno!: number;
  valorDos!: number;
  resultado!: number;

  constructor() { }

  ngOnInit(): void {
  }

 
    
  sumar( f: NgForm){
    this.resultado = this.valorUno + this.valorDos;
  }


}
