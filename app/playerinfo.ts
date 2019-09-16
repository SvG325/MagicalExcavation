export class PlayerInfo {
    id: number;
    name: string;
    intEmptyCrystals = 0;
    intWaterCrystals = 0;
    intFireCrystals = 0;
    intWindCrystals = 0;
    intEarthCrystals = 0;
  
    //Mining speed click multipliers (0)
    dblPickaxeMulti = 1.0;
  
    //Imbue speed click multipliers (1)
    dblPondMulti = 1.0;
  
    //Casting speed click multipliers (2)
  
  
    //Mining speed auto multipliers (10)
    intNrTinyGolems = 0;
    dblPowerTinyGolems = 0.5;
  
    //Imbue speed auto multipliers (11)
  
    //Casting speed auto multipliers (12)
  
    constructor(id, name){
      this.id = id;
      this.name = name;
  
      this.intEmptyCrystals = 900;
      this.intWaterCrystals = 900;
      this.intFireCrystals = 900;
      this.intWindCrystals = 900;
      this.intEarthCrystals = 900;
  
      this.dblPickaxeMulti = 1.0;
      this.dblPondMulti = 1.0;
  
      this.intNrTinyGolems = 0;
      this.dblPowerTinyGolems = 0.5;
    }
  
    miningSpeedMultiplier(){
      var miningSpeedMulti = 1;
      miningSpeedMulti = miningSpeedMulti * this.dblPickaxeMulti;
      return miningSpeedMulti;
    }
  
    autoMineGain(){
      var gain = 0;
      gain += (this.intNrTinyGolems * this.dblPowerTinyGolems);
      return gain;
    }
  
    imbueSpeedMultiplier(){
      var imbueSpeedMulti = 1;
      imbueSpeedMulti = imbueSpeedMulti * this.dblPondMulti;
      return imbueSpeedMulti;
    }
  }