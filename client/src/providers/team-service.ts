import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Team} from "../models/team";

@Injectable()
export class TeamService {

  SERVER_URL = "http://localhost:10010/api/v1/teams/59774fd66990c079b2da6333";

  constructor(public http: Http) {
    console.log('Hello TeamService Provider');
  }

  load(name: string): Observable<Team> {
    return this.http.get(`${this.SERVER_URL}`)
      .map(res => {
        return <Team>res.json();
      });
  }
}
