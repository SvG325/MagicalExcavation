import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../playerinfo';

@Component({
  selector: 'app-tab-stats',
  templateUrl: './tab-stats.component.html',
  styleUrls: ['./tab-stats.component.css']
})
export class TabStatsComponent implements OnInit {
  @Input() playerinfo: PlayerInfo;

  constructor() {
    
   }

  ngOnInit() {
    console.log('mnspeed multi ' + this.playerinfo.dblPickaxeMulti );
  }

}