import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../playerinfo';

@Component({
  selector: 'app-tab-gather',
  templateUrl: './tab-gather.component.html',
  styleUrls: ['./tab-gather.component.css']
})
export class TabGatherComponent implements OnInit {
  @Input() playerinfo: PlayerInfo;

  constructor() { }

  ngOnInit() {
  }

  intImbueElement = -1;


  focusChanged(intFocus) {
    this.intImbueElement = parseInt(intFocus);

  }

  mine() {
    var gain = this.playerinfo.miningSpeedMultiplier();
    this.playerinfo.intEmptyCrystals += gain;
  }

  meditate() {
    if (this.intImbueElement == 0) {
      this.imbueWater();
    } else if (this.intImbueElement == 1) {
      this.imbueFire();
    } else if (this.intImbueElement == 2) {
      this.imbueWind();
    } else if (this.intImbueElement == 3) {
      this.imbueEarth();
    } else {

    }
  }

  imbueWater() {
    var gain = this.playerinfo.imbueSpeedMultiplier();
    if (this.playerinfo.intEmptyCrystals > 0) {
      this.playerinfo.intEmptyCrystals--;
      this.playerinfo.intWaterCrystals += gain;
    } else {
    }
  }

  imbueFire() {
    var gain = this.playerinfo.imbueSpeedMultiplier();
    if (this.playerinfo.intEmptyCrystals > 0) {
      this.playerinfo.intEmptyCrystals--;
      this.playerinfo.intFireCrystals += gain;
    } else {
    }
  }

  imbueWind() {
    var gain = this.playerinfo.imbueSpeedMultiplier();
    if (this.playerinfo.intEmptyCrystals > 0) {
      this.playerinfo.intEmptyCrystals--;
      this.playerinfo.intWindCrystals += gain;
    } else {
    }
  }

  imbueEarth() {
    var gain = this.playerinfo.imbueSpeedMultiplier();
    if (this.playerinfo.intEmptyCrystals > 0) {
      this.playerinfo.intEmptyCrystals--;
      this.playerinfo.intEarthCrystals += gain;
    } else {
    }
  }

}