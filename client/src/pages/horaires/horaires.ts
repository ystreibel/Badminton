import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Schedule} from "../../models/schedule";
import {ScheduleService} from "../../providers/schedule-service";

/*
  Generated class for the Horaires page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-horaires',
  templateUrl: 'horaires.html'
})
export class HorairesPage {

  horaires: Schedule[];

  constructor(public navCtrl: NavController, public scheduleService: ScheduleService) {
    scheduleService.load('Sautron').subscribe(schedules => {
        this.horaires = schedules;
      },
      err => this.logError(err)
    );
  }

  ionViewDidLoad() {
    console.log('Hello Horaires Page');
  }

  public logError(err: TemplateStringsArray) {
    console.error('Error: ' + err);
  }
}
