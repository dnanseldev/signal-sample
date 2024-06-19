import { Component, input } from "@angular/core";

@Component({
  selector: "app-signal-input",
  standalone: true,
  imports: [],
  templateUrl: "./signal-input.component.html",
})
export class SignalInputComponent {
  //label = input("Daniel Stonebuilt")
  label = input.required<string>();
  label2 = input.required<string>({
    alias: "title2",
  });
  title = input("Daniel Stonebuilt");
}
