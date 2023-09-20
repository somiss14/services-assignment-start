export class CounterService {
  actToIn: number = 0;
  inToAct: number = 0;
    increaseInToAct() {
    this.inToAct++;
    console.log("active to inactive ",this.inToAct)
  }

  increaseActToIn() {
    this.actToIn++;
    console.log("inactive to active ",this.actToIn)
  }
}
