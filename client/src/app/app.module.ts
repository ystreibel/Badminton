import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MonEquipePage } from '../pages/mon-equipe/mon-equipe';
import { CalendrierPage } from '../pages/calendrier/calendrier';
import { ResultatsPage } from '../pages/resultats/resultats';
import { ClassementPage } from '../pages/classement/classement';
import { HorairesPage } from '../pages/horaires/horaires';
import { ContactsPage } from '../pages/contacts/contacts';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ArrayFilterPipe } from "../pipes/array-filter.pipe";
import {ArrayOrderByPipe} from "../pipes/array-orderby.pipe";
import {TeamService} from "../providers/team-service";
import {ScheduleService} from "../providers/schedule-service";
import {RankService} from "../providers/rank-service";
import {MatchService} from "../providers/match-service";
import {MatchDetailsPage} from "../pages/match-details/match-details";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push } from '@ionic-native/push';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    MatchDetailsPage,
    MonEquipePage,
    CalendrierPage,
    ResultatsPage,
    ClassementPage,
    HorairesPage,
    ContactsPage,
    AboutPage,
    ArrayFilterPipe,
    ArrayOrderByPipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MatchDetailsPage,
    MonEquipePage,
    CalendrierPage,
    ResultatsPage,
    ClassementPage,
    HorairesPage,
    ContactsPage,
    AboutPage,
    TabsPage
  ],
  providers: [
    TeamService,
    ScheduleService,
    RankService,
    MatchService,
    StatusBar,
    SplashScreen,
    Push,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
