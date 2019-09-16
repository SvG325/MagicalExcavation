import { Spell } from './spell';
import { SpellRequirements } from './spell-requirements';

export const SPELLS: Spell[] = [
  new Spell(1, 'Forge pickaxe', new SpellRequirements(0, 10, 0, 20),"Improved mining speed", 1, 1.5),
  new Spell(2, 'Expand tranquility', new SpellRequirements(40, 0, 20, 30),"Improved imbue speed", 2, 1.5),

  new Spell(10, 'Create tiny golem', new SpellRequirements(10, 100, 0, 200),"Will automatically mine crystals", 10, 1),


]; 