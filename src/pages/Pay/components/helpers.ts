import assign from 'lodash/assign';

export function getNewState(currentState: any, newState: any) {
  return assign({}, currentState, newState);
}

export function getButtonState(currentStep: any, formState: any) {
  if (currentStep === 0 && formState.service === null) {
    return true;
  }

  if (currentStep === 1 && !formState.isContractApproved) {
    return true;
  }
}
