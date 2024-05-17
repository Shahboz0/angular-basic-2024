import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class CommunicationService {

  private _data$ = new Subject()
  constructor() { }

  sendData(counter: number): void {
    this._data$.next(counter)
  }

  getData(): Observable<number | unknown> {
    return this._data$.asObservable()
  }
}
