import { Component } from '@angular/core';

import { MonEquipePage } from '../mon-equipe/mon-equipe';
import { CalendrierPage } from '../calendrier/calendrier';
import { ResultatsPage } from '../resultats/resultats';
import { ClassementPage } from '../classement/classement';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MonEquipePage;
  tab2Root: any = CalendrierPage;
  tab3Root: any = ResultatsPage;
  tab4Root: any = ClassementPage;

  constructor() {

  }
}
