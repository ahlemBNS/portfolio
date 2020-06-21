import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  selected = "";
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService._selectedItem.subscribe(item => {
      this.selected = item;
    });
  }

  set(item: string) {
    this.dataService.setItem(item);
  }
}
