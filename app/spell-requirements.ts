export class SpellRequirements {
    water: number;
    fire : number;
    wind: number;
    earth: number;
    reqString: string;
  
    constructor(water, fire, wind, earth){
      this.water = water;
      this.fire = fire;
      this.wind = wind;
      this.earth = earth;
    };
  
    toString(){
      this.reqString = "";
      if(this.water >0){
        if(this.reqString != ""){
          this.reqString += "\n";
        }
        this.reqString += " - " + this.water + " water crystals.";
      } 
      if(this.fire >0){
        if(this.reqString != ""){
          this.reqString += "\n";
        }
        this.reqString += " - " + this.fire + " fire crystals.";
      }
      if(this.wind >0){
        if(this.reqString != ""){
          this.reqString += "\n";
        }
        this.reqString += " - " + this.wind + " wind crystals.";
      }
      if(this.earth >0){
        if(this.reqString != ""){
          this.reqString += "\n";
        }
        this.reqString += " - " + this.earth + " earth crystals.";
      }
  
      return this.reqString;
    };
  }
  