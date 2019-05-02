import { Fee } from "./fee";

export class Reservation {
  // 親の Fee の種類を把握していない
  fees: [Fee?];

  constructor() {
    this.fees = [];
  }

  addFee(fee: Fee): void {
    this.fees.push(fee);
  }

  feeTotal(): number {
    let total = 0;
    this.fees.forEach(fee => {
      total += fee.getTotal();
    });
    return total;
  }
}

