import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {TodoRestService} from "./services/todo-rest.service";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [TodoRestService],
})
export class TodoRestModule {
}
