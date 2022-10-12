package com.bizit.ejercicio1.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bizit.ejercicio1.dao.IPersonaDao;
import com.bizit.ejercicio1.models.Persona;
import com.bizit.ejercicio1.service.IPersonaService;

@Service
public class PersonaServiceImpl implements IPersonaService {

	@Autowired
	IPersonaDao personaDao;
	
	@Override
	public List<Persona> listarPersonas() {
		return (List<Persona>) personaDao.findAll();
	}

	@Override
	public Persona obtenerPersonaPorId(Integer id) {
		return personaDao.findById(id).orElse(null);
	}

	@Override
	public Persona guardarPersona(Persona persona) {
		return personaDao.save(persona);
	}

	@Override
	public Persona modificarPersona(Persona persona) {
		return personaDao.save(persona);
	}

	@Override
	public void borrarPersonaPorId(Integer id) {
		personaDao.deleteById(id);
	}

}
