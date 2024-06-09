import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  ESharedEvents,
  SharedEventPayloadMap,
} from '../../constants/shared-events.enum';
import { EventBus } from '../../services/event-bus.service';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss'],
})
export class DisplayCounterComponent implements OnInit, OnDestroy {
  public value: number = 0;
  private readonly _subscription: Subscription[] = [];

  constructor(private _eventBus: EventBus<SharedEventPayloadMap>) {}

  ngOnInit(): void {
    this._listenEvents();
  }

  private _listenEvents(): void {
    const add$ = this._eventBus.on(ESharedEvents.ADD).subscribe((value) => {
      this.value += value;
    });
    const subtract$ = this._eventBus.on(ESharedEvents.SUBTRACT).subscribe((value) => {
      this.value -= value;
    });
    const reset$ = this._eventBus.on(ESharedEvents.RESET).subscribe(() => {
      this.value = 0;
    });

    this._subscription.push(add$, subtract$, reset$);
  }

  ngOnDestroy(): void {
    this._subscription.forEach((s) => s.unsubscribe());
  }
}
