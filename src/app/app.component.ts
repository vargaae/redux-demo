import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from './store';
// import { IAppState, rootReducer } from './store';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Andras Varga's REDUX-demo Project";
  // counter = 0;

  message$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }

  // constructor(ngRedux: NgRedux<IAppState) {

  // }

  // increment() {
  //   this.counter++;
  // }
}
