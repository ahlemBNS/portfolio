import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-know-me-step",
  templateUrl: "./know-me-step.component.html",
  styleUrls: ["./know-me-step.component.scss"]
})
export class KnowMeStepComponent implements OnInit {
  @Input() step;
  @Input() value;

  constructor(private dataService: DataService) {}

  ngOnInit() {}
  start() {
    console.log("heyey", this.step);
    this.dataService.setNextStep(this.step);
    this.dataService.setValue(this.value);
  }
}
