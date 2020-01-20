import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPokerPlanningComponent } from './new-poker-planning/new-poker-planning.component';
import { PokerGameComponent } from './poker-game/poker-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPokerPlanningComponent,
    PokerGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
