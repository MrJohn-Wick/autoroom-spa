import { Area } from './Area';
import { FormWrapperStyled } from './styled';
import { VehicleSelect } from './VehicleSelect';

export function CalcForm() {
  return (
    <FormWrapperStyled>
      <VehicleSelect />
      <Area />
    </FormWrapperStyled>
  );
}
