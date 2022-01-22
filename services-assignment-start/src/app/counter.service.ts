import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  counter: number = 0;

  counterUpdated = new EventEmitter<number>();

  incrementCounter() {
    return ++this.counter;
  }
}
