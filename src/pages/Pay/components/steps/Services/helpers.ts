import assign from 'lodash/assign';

export function getNewState(currentState: any, newState: any) {
  return assign({}, currentState, newState);
}
