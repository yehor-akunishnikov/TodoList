import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FullscreenLoaderComponent} from './fullscreen-loader/fullscreen-loader.component';

@NgModule({
  declarations: [FullscreenLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [FullscreenLoaderComponent]
})
export class SharedModule {
}
