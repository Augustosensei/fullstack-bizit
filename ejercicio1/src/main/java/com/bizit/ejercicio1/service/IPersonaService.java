package com.bizit.ejercicio1.service;

import java.util.List;

import com.bizit.ejercicio1.models.Persona;

public interface IPersonaService {

	
	List<Persona>listarPersonas();
	Persona obtenerPersonaPorId(Integer id);
	Persona guardarPersona(Persona persona);
	Persona modificarPersona(Persona persona);
	void borrarPersonaPorId(Integer id);
	
	
}
