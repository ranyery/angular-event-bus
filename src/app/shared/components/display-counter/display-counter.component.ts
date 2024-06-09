import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  ESharedEvents,
  SharedEventActionMap,
} from '../../constants/shared-events.enum';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss'],
})
export class DisplayCounterComponent implements OnInit, OnDestroy {
  public value: number = 0;
  private readonly _subscription = new Subscription();

  constructor(private _eventBus: EventBusService<SharedEventActionMap>) {}

  ngOnInit(): void {
    this._listenEvents();
  }

  private _listenEvents(): void {
    const add$ = this._eventBus.on(ESharedEvents.ADD, (value) => {
      this.value += value;
    });
    const reset$ = this._eventBus.on(ESharedEvents.RESET, () => {
      this.value = 0;
    });
    const subtract$ = this._eventBus.on(ESharedEvents.SUBTRACT, (value) => {
      this.value -= value;
    });

    this._subscription.add(add$);
    this._subscription.add(reset$);
    this._subscription.add(subtract$);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
