import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Idata {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

@Injectable({
  providedIn: "root"
})
export class HttpService {


  constructor(private _httpClient: HttpClient) {
  }

  getDataFromFakeBack(): Observable<Idata> {
    return this._httpClient.get<Idata>('https://jsonplaceholder.typicode.com/todos/1')
  }
}
