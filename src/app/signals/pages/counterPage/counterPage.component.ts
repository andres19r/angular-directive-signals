import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counterPage',
  templateUrl: './counterPage.component.html',
  styleUrls: ['./counterPage.component.css'],
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
