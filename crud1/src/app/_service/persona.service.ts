import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../_model/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = `${environment.HOST}/persona`;
  private personaCambio = new Subject<Persona[]>(); 

  private mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }


  listarPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }


  obtenerPorId(id: number):Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }

  guardar(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }


  modificar(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url, persona);
  }


  eliminarPorId(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }


  setPersonaCambio(persona: Persona[]){
    this.personaCambio.next(persona);
  }

  getPersonaCambio(){
     return this.personaCambio.asObservable();
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }
  
  setMensajeCambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }

}
