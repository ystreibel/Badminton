import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Match} from "../../models/match";
import {MatchService} from "../../providers/match-service";

/*
  Generated class for the Resultats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resultats',
  templateUrl: 'resultats.html'
})
export class ResultatsPage {

  matchs: Match[];

  constructor(public navCtrl: NavController, public matchService: MatchService) {
    matchService.load('Sautron').subscribe(matchs => {
        this.matchs = matchs;
      },
      err => this.logError(err)
    );
  }

  ionViewDidLoad() {
    console.log('Hello Resultats Page');
  }

  public logError(err: TemplateStringsArray) {
    console.error('Error: ' + err);
  }

}
