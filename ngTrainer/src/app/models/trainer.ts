export class Trainer {
  id: number;
  name: string;
  bench: number;
  squat: number;
  deadlift: number;
  constructor(id: number = 0, name: string = '', bench: number = 0, squat: number = 0, deadlift: number = 0){
    this.id = id;
    this.name = name;
    this.bench = bench;
    this.squat = squat;
    this.deadlift = deadlift;
  }
}
