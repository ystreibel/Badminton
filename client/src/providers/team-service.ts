import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Team} from "../models/team";

@Injectable()
export class TeamService {

  SERVER_URL = "./assets/data/team.json";

  constructor(public http: Http) {
    console.log('Hello TeamService Provider');
  }

  load(name: string): Observable<Team> {
    return this.http.get(`${this.SERVER_URL}`)
      .map(res => <Team>res.json());
  }
}
