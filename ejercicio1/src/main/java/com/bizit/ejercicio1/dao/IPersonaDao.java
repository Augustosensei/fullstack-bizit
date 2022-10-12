package com.bizit.ejercicio1.dao;

import org.springframework.data.repository.CrudRepository;

import com.bizit.ejercicio1.models.Persona;

public interface IPersonaDao extends CrudRepository<Persona, Integer> {


	
}
