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
  selected: Trainer | null = null;

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

  viewTrainer(trainer: Trainer){
    this.selected = trainer;
    console.log(trainer.id);
  }

  reload(){
    this.trainerService.index().subscribe(
      {
        next: (data: Trainer[]) => {
          this.trainers = data
        },
        error: (err: any) => {
          console.error('Trainers.reload(): error loading trainers:');
          console.error(err);
        }
      }
    )
  }

  delete(trainer: Trainer){
    this.trainerService.destroy(trainer.id).subscribe(
      {
        next: () => {
          this.reload();
        },
        error: (err: any) => {
          console.error('Trainers.deleteTrainer(): error deleting trainer:');
          console.error(err);
        }
      }
    );
  }

  close(){

  }

  edit(trainer: Trainer){

  }


  ngOnInit(): void {
    this.loadTrainers();
  }

}
