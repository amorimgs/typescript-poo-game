import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static nInstancias = 0;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.nInstancias += 1;
  }

  static createdArchetypeInstances():number {
    return Necromancer.nInstancias;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;