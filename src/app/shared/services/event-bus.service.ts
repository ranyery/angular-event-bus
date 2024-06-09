import { EventEmitter, Injectable } from '@angular/core';
import { Subscription, filter, map, shareReplay } from 'rxjs';

import { IEvent } from '../interfaces/event.interface';

@Injectable({ providedIn: 'root' })
export class EventBusService<EventActionMap> {
  readonly #eventEmitter$ = new EventEmitter<IEvent<EventActionMap>>();

  constructor() {}

  public emit<K extends keyof EventActionMap>(key: K): void;
  public emit<K extends keyof EventActionMap>(
    key: K,
    data: EventActionMap[K]
  ): void;
  public emit<K extends keyof EventActionMap>(
    key: K,
    data?: EventActionMap[K]
  ): void {
    this.#eventEmitter$.emit({ key, data });
  }

  public on<K extends keyof EventActionMap>(
    key: K,
    callback: (data: EventActionMap[K]) => void
  ): Subscription {
    return this.#eventEmitter$
      .pipe(
        filter((event: IEvent<EventActionMap>) => event.key === key),
        map((event: IEvent<EventActionMap>) => event.data as EventActionMap[K]),
        shareReplay({ bufferSize: 1, refCount: true })
      )
      .subscribe(callback);
  }
}
