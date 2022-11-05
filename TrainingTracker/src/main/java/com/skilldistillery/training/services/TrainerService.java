package com.skilldistillery.training.services;

import java.util.List;

import com.skilldistillery.training.entities.Trainer;

public interface TrainerService {
	List<Trainer> listAllTrainers();
	Trainer showTrainer(int trainerId);
	Trainer create(Trainer trainer);
	Trainer update(int trainerId, Trainer newTrainer);
	boolean delete(int trainerId);
}
