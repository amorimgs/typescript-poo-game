import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static nInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.nInstancias += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.nInstancias;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Halfling;