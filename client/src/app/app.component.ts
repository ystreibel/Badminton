import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HorairesPage } from '../pages/horaires/horaires';
import { ContactsPage } from '../pages/contacts/contacts';
import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';
import {MatchDetailsPage} from "../pages/match-details/match-details";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Championnat UFOLEP', component: TabsPage },
      { title: 'Horaires Entrainements', component: HorairesPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'A Propos', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.push.hasPermission().then((res: any) => {

          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }

        });

        const options: PushOptions = {
          android: {
            senderID: '253743079858'
          },
          ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
          },
          windows: {}
        };

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => {
          console.log('message', notification.message);
          let self = this;
          //if user using app and push notification comes
          if (notification.additionalData.foreground) {
            // if application open, show popup
            let confirmAlert = this.alertCtrl.create({
              title: 'New Notification',
              message: notification.message,
              buttons: [{
                text: 'Ignore',
                role: 'cancel'
              }, {
                text: 'View',
                handler: () => {
                  //TODO: Your logic here
                  self.nav.push(MatchDetailsPage, {message: notification.message});
                }
              }]
            });
            confirmAlert.present();
          } else {
            //if user NOT using app and push notification comes
            //TODO: Your logic on click of push notification directly
            self.nav.push(MatchDetailsPage, {message: notification.message});
            console.log("Push notification clicked");
          }
        });

        pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));// TODO - send device token to server

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
