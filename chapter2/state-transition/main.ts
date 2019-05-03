import { ApprovalState, canTransition } from "./state";

const from = ApprovalState.suspended;
const to = ApprovalState.inOperation;

const result = canTransition(from, to);

console.log(result);
