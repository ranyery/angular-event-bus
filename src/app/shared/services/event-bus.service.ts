import { Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay, Subject } from 'rxjs';

import { IEvent } from '../interfaces/event.interface';

@Injectable({ providedIn: 'root' })
export class EventBus<PayloadMap> {
  private readonly _subject$ = new Subject<IEvent<PayloadMap>>();

  constructor() {}

  public emit<K extends keyof PayloadMap>(key: K, data: PayloadMap[K]): void {
    this._subject$.next({ key, data });
  }

  public on<K extends keyof PayloadMap>(key: K): Observable<PayloadMap[K]> {
    return this._subject$.pipe(
      filter((e: IEvent<PayloadMap>) => e.key === key),
      map((e: IEvent<PayloadMap>) => e.data as PayloadMap[K]),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
