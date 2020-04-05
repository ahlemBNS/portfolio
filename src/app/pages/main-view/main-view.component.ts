import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {
  started = false;
  knowMe = 0;
  value = 5;
  constructor(private dataService: DataService) {
    this.value = 5;
  }

  ngOnInit() {
    this.dataService._getNextStep.subscribe(e => {
      console.log("KNOW ME step", e);
      this.knowMe = e;
    });
    this.dataService._getValue.subscribe(e => {
      console.log("PB VALUE", e);
      this.value = e;
    });
  }
  start() {
    this.started = true;
    this.knowMe = this.knowMe + 1;
  }
}
