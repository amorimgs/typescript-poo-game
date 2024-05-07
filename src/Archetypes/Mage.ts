import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static nInstancias = 0;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage.nInstancias += 1;
  }
  
  static createdArchetypeInstances():number {
    return Mage.nInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;