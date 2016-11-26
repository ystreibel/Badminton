import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
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
    IonicModule.forRoot(MyApp)
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
    MatchService
  ]
})
export class AppModule {}
