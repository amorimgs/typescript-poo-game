import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static nInstancias = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.nInstancias += 1;
  }
  
  static createdArchetypeInstances():number {
    return Ranger.nInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;