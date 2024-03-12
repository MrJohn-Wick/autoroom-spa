import assign from 'lodash/assign';
import isEmpty from 'lodash/isEmpty';

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

  if (
    currentStep === 2 &&
    (isEmpty(formState.firstName) ||
      isEmpty(formState.secondName) ||
      isEmpty(formState.subName) ||
      isEmpty(formState.phone) ||
      isEmpty(formState.email) ||
      !formState.isConsentApproved)
  ) {
    return true;
  }
}
