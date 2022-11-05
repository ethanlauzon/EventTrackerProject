package com.skilldistillery.training.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.training.entities.Trainer;
import com.skilldistillery.training.repositories.TrainerRepository;

@Service
public class TrainerServiceImpl implements TrainerService {
	@Autowired
	private TrainerRepository trainerRepo;
	
	@Override
	public List<Trainer> listAllTrainers() {
		return trainerRepo.findAll();
	}

	@Override
	public Trainer showTrainer(int trainerId) {
		return trainerRepo.queryById(trainerId);
	}

	@Override
	public Trainer create(Trainer trainer) {
		trainerRepo.saveAndFlush(trainer);
		return trainer;
	}

	@Override
	public Trainer update(int trainerId, Trainer newTrainer) {
		Trainer trainerToUpdate = trainerRepo.queryById(trainerId);
		if(trainerToUpdate != null) {
			trainerToUpdate.setName(newTrainer.getName());
			trainerToUpdate.setBench(newTrainer.getBench());
			trainerToUpdate.setDeadlift(newTrainer.getDeadlift());
			trainerToUpdate.setSquat(newTrainer.getSquat());
		}
		trainerRepo.saveAndFlush(trainerToUpdate);
		return trainerToUpdate;
	}

	@Override
	public boolean delete(int trainerId) {
		boolean deleted = false;
		Trainer trainerToDelete = trainerRepo.queryById(trainerId);
		if(trainerToDelete != null) {
			trainerRepo.deleteById(trainerId);
			deleted = true;
		}
		return deleted;
	}

}
