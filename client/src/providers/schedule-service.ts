import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Schedule} from "../models/schedule";
import {Observable} from "rxjs";

@Injectable()
export class ScheduleService {

  SERVER_URL = "./assets/data/schedule.json";

  constructor(public http: Http) {
    console.log('Hello ScheduleService Provider');
  }

  load(name: string): Observable<Schedule[]> {
    return this.http.get(`${this.SERVER_URL}`)
      .map(res => <Schedule[]>res.json());
  }
}
