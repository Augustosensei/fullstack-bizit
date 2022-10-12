package com.bizit.ejercicio1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bizit.ejercicio1.dao.IPersonaDao;
import com.bizit.ejercicio1.models.Persona;
import com.bizit.ejercicio1.service.IPersonaService;

@RequestMapping("/persona")
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class PersonaController {

	@Autowired
	IPersonaService personaService;
	

	@GetMapping
	public List<Persona> listarPersonas(){
		return (List<Persona>) personaService.listarPersonas();
	}
	
	@GetMapping("/{id}")
	public Persona obtenerPersonasPorId(@PathVariable Integer id){
		return  personaService.obtenerPersonaPorId(id);
	}
	
	
	@PostMapping
	public Persona guardar(@RequestBody Persona persona){
		return personaService.guardarPersona(persona);
	}
	
	@PutMapping
	public Persona modificar(@RequestBody Persona persona){
		return personaService.modificarPersona(persona);
	}
	
	@DeleteMapping("/{id}")
	public void eliminarPorId(@PathVariable Integer id){
		 personaService.borrarPersonaPorId(id);
	}
	
}
