import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { PostComponent } from './posting/components/post/post.component';
import { postReducer } from './posting/reducers/post.reducer';
import { ShoppingListComponent } from './shopping/components/shopping-list/shopping-list.component';
import { ShoppingReducer } from './shopping/reducers/shopping.reducer';
import { simpleReducer } from './store/simple.reducer';
import { TodoDashboardComponent } from './todo/components/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { TodoReducer } from './todo/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { PostEffects } from './posting/effects/post.effects';
import { MaterialModule } from './material-module';
import { TodoApiComponent } from './todo/components/todo-api/todo-api.component';
// import { TodoService } from './todo/services/todo.service';
// import { NgRedux, NgReduxModule, select } from '@angular-redux/store';
// import { rootReducer } from './store';
import * as fromApp from './store/app.reducer';
import { TodoComponent } from './todo/components/todo/todo.component';
import { TodoToggleComponent } from './todo/components/todo-toggle/todo-toggle.component';
import { TodoFetchComponent } from './todo/components/todo-fetch/todo-fetch.component';
import { rootReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TodoListComponent,
    TodoDashboardComponent,
    PostComponent,
    ShoppingListComponent,
    TodoApiComponent,
    TodoComponent,
    TodoToggleComponent,
    TodoFetchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,

    // NgReduxModule,
    StoreModule.forRoot({
      [fromApp.appFeatureKey]: fromApp.reducer,
      message: simpleReducer,
      post: postReducer,
      shopping: ShoppingReducer,
      todo: rootReducer,
      count: counterReducer,
      todolisting: TodoReducer,
      // tododashboard: TodoDashboardReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    BrowserAnimationsModule,
    EffectsModule.forRoot([PostEffects, AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, {});
  // }
}
