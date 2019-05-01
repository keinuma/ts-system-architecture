import { FeeFactory, FeeType } from "./fee";
import { Reservation } from "./reservation";

const adultNumber: number = 5;
const childNumber: number = 10;

const reservation = new Reservation();
reservation.addFee(FeeFactory(FeeType.adult, adultNumber));
reservation.addFee(FeeFactory(FeeType.child, childNumber));

const totalFee = reservation.feeTotal();
console.log(totalFee);
