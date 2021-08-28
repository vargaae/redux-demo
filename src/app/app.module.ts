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
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { PostComponent } from './posting/components/post/post.component';
import { postReducer } from './posting/reducers/post.reducer';
import { ShoppingListComponent } from './shopping/components/shopping-list/shopping-list.component';
import { ShoppingReducer } from './shopping/reducers/shopping.reducer';
import { simpleReducer } from './simple.reducer';
import { TodoDashboardComponent } from './todo/components/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { TodoReducer } from './todo/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { PostEffects } from './posting/effects/post.effects';
import {MatButtonModule} from '@angular/material/button';
// import { TodoService } from './todo/services/todo.service';
// import { NgRedux, NgReduxModule, select } from '@angular-redux/store';
// import { rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TodoListComponent,
    TodoDashboardComponent,
    PostComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // NgReduxModule,
    StoreModule.forRoot({
      count: counterReducer,
      message: simpleReducer,
      post: postReducer,
      shopping: ShoppingReducer,
      todolisting: TodoReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
    BrowserAnimationsModule,
    EffectsModule.forRoot([
      PostEffects,
      AppEffects
    ]),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, {});
  // }
}
