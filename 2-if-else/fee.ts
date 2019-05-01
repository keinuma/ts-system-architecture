import { Yen } from "./yen";

export interface Fee {
  yen: Yen;
  label: string;
  numberOfPeople: number;

  getTotal(): number;
}

export const enum FeeType {
  adult,
  child
}

const FeeUnitMap: Map<number, number> = new Map([
  [FeeType.adult, 1000],
  [FeeType.child, 500]
]);

class AdultFee implements Fee {
  yen: Yen;
  label: string;
  numberOfPeople: number;

  constructor(numberOfPeople: number = 0) {
    this.yen = new Yen(FeeUnitMap.get(FeeType.adult));
    this.label = "大人";
    this.numberOfPeople = numberOfPeople;
  }

  getTotal(): number {
    return this.numberOfPeople * this.yen.value;
  }
}

class ChildFee implements Fee {
  yen: Yen;
  label: string;
  numberOfPeople: number;

  constructor(numberOfPeople: number = 0) {
    this.yen = new Yen(FeeUnitMap.get(FeeType.adult));
    this.label = "子供";
    this.numberOfPeople = numberOfPeople;
  }

  getTotal(): number {
    return this.numberOfPeople * this.yen.value;
  }
}

export const FeeFactory = (feeType: FeeType, numberOfPeople: number): Fee => {
  switch (feeType) {
    case FeeType.adult:
      return new AdultFee(numberOfPeople);
    case FeeType.child:
      return new ChildFee(numberOfPeople);
  }
};
