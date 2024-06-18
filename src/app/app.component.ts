import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalInputComponent } from './components/signal-input/signal-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'signal-sample';

  protected sampleSignal = signal('');
  protected exampleCount = signal(0)
 protected computedSample = computed(() => `${this.exampleCount()} + computed`)


  fireOff() {
    //this.sampleSignal.set('Das is ein signal')
    this.exampleCount.update(cur => cur + 1)
  }
}
