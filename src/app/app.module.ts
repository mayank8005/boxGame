import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { PlayAreaComponent } from './components/play-area/play-area.component';
import { BoxComponent } from './components/box/box.component';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PlayAreaComponent,
    BoxComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
