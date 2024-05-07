import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static nInstancias = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.nInstancias += 1;
  }
  
  static createdArchetypeInstances():number {
    return Warrior.nInstancias;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;