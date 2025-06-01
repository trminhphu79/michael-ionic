import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'mcl-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [IonNav],
})
export class AppComponent {
  constructor() {}
}
