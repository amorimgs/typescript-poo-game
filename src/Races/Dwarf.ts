import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static nInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.nInstancias += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.nInstancias;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Dwarf;