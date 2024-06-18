import { Component, input } from '@angular/core';

@Component({
  selector: 'signal-input',
  standalone: true,
  imports: [],
  templateUrl: './signal-input.component.html'
})
export class SignalInputComponent {
  //label = input("Daniel Stonebuilt")
  label = input.required<string>()
}
