import { SpellRequirements } from './spell-requirements';

export class Spell {
  id: number;
  name: string;
  level: number;
  baseRequirements: SpellRequirements;
  requirements: SpellRequirements;
  effectdescription: string;
  effecttype: number;
  baseEffectValue : number;
  effectvalue: number;

  constructor(id, name, requirements, effects, type, value){
    this.id = id;
    this.name = name;
    this.baseRequirements = requirements;
    this.requirements = requirements;
    this.effectdescription = effects;
    this.effecttype = type;
    this.baseEffectValue = value;
    this.effectvalue = value;
    this.level = 0;
    this.increaseLevel(1);
  }

  increaseLevel(delta) {
    this.level += delta;
    var multi : number = 0.5 * Math.pow(this.level, 2);
    this.requirements.water = multi * this.baseRequirements.water;
    this.requirements.fire = multi * this.baseRequirements.fire;
    this.requirements.wind = multi * this.baseRequirements.wind;
    this.requirements.earth = multi * this.baseRequirements.earth;

    this.effectvalue = this.level * this.baseEffectValue;
  }

}
