package com.skilldistillery.training.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	@DeleteMapping("trainers/{trainerId}")
	public void deleteTrainer(@PathVariable Integer trainerId, HttpServletResponse res) {
		try {
			if(trainerService.delete(trainerId)) {
				res.setStatus(204);
			}else {
				res.setStatus(404);
			}
		} catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			}
	}
	
	
}
