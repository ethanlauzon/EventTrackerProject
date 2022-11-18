import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainers: Trainer[] = [];

  constructor(
    private trainerService: TrainerService
  ) { }

  loadTrainers(){
    this.trainerService.index().subscribe({
      next: (trainers) => {
        console.log(trainers);
        this.trainers = trainers;
      },
      error: (oops) =>{
        console.error('HomeComponet.loadTrainers: error getting trainers');
        console.error(oops);
      }
    });
  }

  ngOnInit(): void {
    this.loadTrainers();
  }

}
