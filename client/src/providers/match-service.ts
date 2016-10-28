import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Match} from "../models/match";
import {Observable} from "rxjs";

/*
  Generated class for the MatchService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MatchService {

  SERVER_URL = "./assets/data/match_sautron.json";

  constructor(public http: Http) {
    console.log('Hello MatchService Provider');
  }

  load(name: string): Observable<Match[]> {
    return this.http.get(`${this.SERVER_URL}`)
      .map(res => <Match[]>res.json());
  }
}
