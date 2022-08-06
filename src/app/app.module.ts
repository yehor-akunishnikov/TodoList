import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {metaReducers, reducers} from './reducers';
import {environment} from '../environments/environment';
import {AppEffects} from './app.effects';

import {TodoPageModule} from "./pages/todo/todo-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TodoPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
