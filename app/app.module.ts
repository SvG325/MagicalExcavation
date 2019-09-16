import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabGatherComponent } from './tab-gather/tab-gather.component';
import { TabCastComponent } from './tab-cast/tab-cast.component';
import { TabStatsComponent } from './tab-stats/tab-stats.component';


@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent,
    TabGatherComponent, 
    TabCastComponent, 
    TabStatsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
