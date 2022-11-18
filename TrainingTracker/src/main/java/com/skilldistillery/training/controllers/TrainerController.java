package com.skilldistillery.training.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.training.entities.Trainer;
import com.skilldistillery.training.services.TrainerService;

@CrossOrigin({"*", "http://localhost/"})
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
	
	@PutMapping("trainers/{trainerId}")
	public Trainer updateTrainer(@PathVariable Integer trainerId, @RequestBody Trainer trainer, HttpServletResponse res) {
		trainer = trainerService.update(trainerId, trainer);
		try {
			if(trainer == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			trainer = null;
		}
		return trainer;
	}
	
	@PostMapping("trainers")
	public Trainer createTrainer(@RequestBody Trainer trainer) {
	return trainerService.create(trainer);
	}
}
