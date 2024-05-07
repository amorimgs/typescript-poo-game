import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static nInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.nInstancias += 1;
  }

  static createdRacesInstances(): number {
    return Elf.nInstancias;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;