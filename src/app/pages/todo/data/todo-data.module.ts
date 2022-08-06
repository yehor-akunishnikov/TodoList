import {NgModule} from '@angular/core';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {TodoRestModule} from "../rest/todo-rest.module";
import {featureKey, featureReducer} from "./store/store";
import {TodoEffects} from "./store/effects/todo.effects";
import {TodoDataService} from "./services/todo-data.service";

@NgModule({
  imports: [
    TodoRestModule,
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [TodoDataService],
})
export class TodoDataModule {
}
