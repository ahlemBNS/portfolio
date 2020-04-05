import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private nextStep: BehaviorSubject<number>;
  private value: BehaviorSubject<number>;

  constructor() {
    this.nextStep = new BehaviorSubject(0);
    this.value = new BehaviorSubject(0);
  }
  setNextStep(step: number) {
    step++;

    this.nextStep.next(step);
  }
  get _getNextStep() {
    return this.nextStep.asObservable();
  }
  setValue(i: number) {
    i += 15;
    this.value.next(i);
  }
  get _getValue() {
    return this.value.asObservable();
  }
}
