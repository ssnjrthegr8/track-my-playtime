import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { RouteEntry } from './components/nav/nav.component';

import { State } from './reducers';
import * as actions from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<State>) {
    store.dispatch(new actions.InitializeApplication());
  }

  routes: RouteEntry[] = [
    {
      caption: 'Tracker',
      router: ['tracker'],
      exact: true
    }
  ];
}
