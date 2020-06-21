import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private selectedItem: BehaviorSubject<string>;
  constructor() {
    this.selectedItem = new BehaviorSubject("home");
  }

  get _selectedItem() {
    return this.selectedItem.asObservable();
  }

  setItem(item) {
    this.selectedItem.next(item);
  }
}
