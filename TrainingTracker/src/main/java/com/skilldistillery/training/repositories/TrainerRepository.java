package com.skilldistillery.training.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.training.entities.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Integer> {
	Trainer queryById(int trainerId);
}
