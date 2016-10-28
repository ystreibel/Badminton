import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rank} from "../models/rank";
import {Observable} from "rxjs";

/*
  Generated class for the RankService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RankService {

  SERVER_URL = "./assets/data/rank.json";

  constructor(public http: Http) {
    console.log('Hello RankService Provider');
  }

  load(): Observable<Rank[]> {
    return this.http.get(`${this.SERVER_URL}`)
      .map(res => <Rank[]>res.json());
  }

}
