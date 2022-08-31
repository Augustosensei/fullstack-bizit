import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../_model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/persona';

  constructor(private http: HttpClient) { }

  listarPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }


}
