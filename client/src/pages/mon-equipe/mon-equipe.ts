import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TeamService} from "../../providers/team-service";
import {Player} from "../../models/player";

@Component({
  selector: 'page-mon-equipe',
  templateUrl: 'mon-equipe.html'
})
export class MonEquipePage {

  joueurs: Player[];
  capitaine: number;

  constructor(public navCtrl: NavController, public teamService: TeamService) {
    teamService.load('Sautron').subscribe(team => {
      this.joueurs = team.players;
      this.capitaine = team.captain
    },
      err => this.logError(err)
    );
  }

  public mailto(email) {
    window.open(`mailto:${email}`, '_system', 'location=yes');
  }

  public sms(phone) {
    window.open(`sms:${phone}`, '_system', 'location=yes');
  }

  public tel(phone) {
    window.open(`tel:${phone}`, '_system', 'location=yes');
  }

  public logError(err: TemplateStringsArray) {
    console.error('Error: ' + err);
  }
}
