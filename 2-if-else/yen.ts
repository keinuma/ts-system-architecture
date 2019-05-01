export class Yen {
  value: number;

  constructor(yen: number) {
    if (yen < 0) {
      throw Error;
    }
    this.value = yen;
  }
}
