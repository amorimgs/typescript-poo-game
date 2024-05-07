import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static nInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.nInstancias += 1;
  }

  static createdRacesInstances(): number {
    return Orc.nInstancias;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Orc;