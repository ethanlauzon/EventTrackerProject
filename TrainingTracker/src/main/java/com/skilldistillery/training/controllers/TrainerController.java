package com.skilldistillery.training.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.training.entities.Trainer;
import com.skilldistillery.training.services.TrainerService;

@RestController
@RequestMapping("api")
public class TrainerController {
	
	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("trainers")
	public List<Trainer> listTrainers(){
		return trainerService.listAllTrainers();
	}
	
	@GetMapping("trainers/{trainerId}")
	public Trainer findById(@PathVariable Integer trainerId, HttpServletResponse res) {
		Trainer trainer = trainerService.showTrainer(trainerId);
		if(trainer == null) {
			res.setStatus(404);
		}
		return trainer;
	}
	
	
}
