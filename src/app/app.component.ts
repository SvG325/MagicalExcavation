import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from './playerinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  playerinfo = null;
  title = 'build-test';

  constructor() { 
  }

  ngOnInit() {
    this.playerinfo = new PlayerInfo(1, 'WindStorm');
  }
}
