import { Component, OnInit } from '@angular/core';
import {
  ESharedEvents,
  SharedEventActionMap,
} from 'src/app/shared/constants/shared-events.enum';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private _eventBus: EventBusService<SharedEventActionMap>) {}

  ngOnInit(): void {}

  public add(): void {
    this._eventBus.emit(ESharedEvents.ADD, 1);
  }

  public subtract(): void {
    this._eventBus.emit(ESharedEvents.SUBTRACT, 1);
  }

  public reset(): void {
    this._eventBus.emit(ESharedEvents.RESET);
  }
}
