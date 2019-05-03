export enum ApprovalState {
  examination,
  feedback,
  approved,
  inOperation,
  suspended,
  close
}

const approvalStateTransitions = new Map([
  [ApprovalState.examination, new Set([ApprovalState.approved, ApprovalState.feedback])],
  [ApprovalState.feedback, new Set([ApprovalState.examination, ApprovalState.close])],
  [ApprovalState.approved, new Set([ApprovalState.inOperation, ApprovalState.close])],
  [ApprovalState.inOperation, new Set([ApprovalState.suspended, ApprovalState.close])],
  [ApprovalState.suspended, new Set([ApprovalState.inOperation, ApprovalState.close])]
]);

export const canTransition = (from: ApprovalState, to: ApprovalState): boolean => {
  const transitionSet = approvalStateTransitions.get(from);
  return transitionSet.has(to)
};
