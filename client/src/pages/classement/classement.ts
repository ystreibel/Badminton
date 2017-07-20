import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Rank} from "../../models/rank";
import {RankService} from "../../providers/rank-service";

/*
  Generated class for the Classement page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-classement',
  templateUrl: 'classement.html'
})
export class ClassementPage {

  ranking: Rank[];

  constructor(public navCtrl: NavController, public rankService: RankService) {
    rankService.load().subscribe(ranks => {
        this.ranking = ranks;
      },
      err => this.logError(err)
    );
  }

  ionViewDidLoad() {
    console.log('Hello Classement Page');
  }

  public logError(err: TemplateStringsArray) {
    console.error('Error: ' + err);
  }

}
