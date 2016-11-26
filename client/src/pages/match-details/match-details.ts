
import {Component} from "@angular/core";
import {NavParams, Platform, ActionSheetController} from "ionic-angular";
import {Match} from "../../models/match";
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'match-details.html'
})
export class MatchDetailsPage {
  pushMessage: string;
  match: any;

  constructor(public params: NavParams, public platform: Platform, public actionSheetCtrl: ActionSheetController) {
    if (params.data.id) {
      this.match = <Match> params.data;
    }
    if (params.data.message){
      this.pushMessage = params.data.message;
    }

  }

  takePictureOfMatchSheet(){
    Camera.getPicture({
      destinationType: 0,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.match.base64MatchSheetImage = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  takePictureOfReceipt(){
    Camera.getPicture({
      destinationType: 0,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.match.base64ReceiptImage = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Ajouter/Modifier la feuille de match',
          role: 'destructive',
          icon: 'camera',
          handler: () => {
            this.takePictureOfMatchSheet();
          }
        },
        {
          text: 'Ajouter/Modifier le ticket de caisse',
          icon: 'camera',
          handler: () => {
            this.takePictureOfReceipt()
          }
        },
        {
          text: 'Annuler',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}
