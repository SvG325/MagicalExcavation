import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../playerinfo';
import { SPELLS } from '../data-spells';
import {Spell } from '../spell';

@Component({
  selector: 'app-tab-cast',
  templateUrl: './tab-cast.component.html',
  styleUrls: ['./tab-cast.component.css']
})
export class TabCastComponent implements OnInit {
   @Input() playerinfo: PlayerInfo;

   spells = SPELLS;
   
  constructor() { }

  ngOnInit() {
  }

  cast(spellId) {
    var spell : Spell = this.spells.find((myObj => myObj.id == spellId));

    //Check requirements
    if (this.playerinfo.intWaterCrystals < spell.requirements.water){
      return;
    } else if (this.playerinfo.intFireCrystals < spell.requirements.fire){
      return;
    } else if (this.playerinfo.intWindCrystals < spell.requirements.wind){
      return;
    } else if (this.playerinfo.intEarthCrystals < spell.requirements.earth){
      return;
    }

    //Take spell costs
    this.playerinfo.intWaterCrystals -= spell.requirements.water;
    this.playerinfo.intFireCrystals -= spell.requirements.fire;
    this.playerinfo.intWindCrystals -= spell.requirements.wind;
    this.playerinfo.intEarthCrystals -= spell.requirements.earth;

    //Apply spell effect
    if(spell.id == 1){
      this.playerinfo.dblPickaxeMulti = spell.effectvalue;
    }else if(spell.id == 2){
      this.playerinfo.dblPondMulti = spell.effectvalue;
    }
    
    spell.increaseLevel(1);

  }

}