import { CalcForm } from './CalcForm';
import { CalcResults } from './CalcResults';

export function Calc() {
  function onChange() {}

  return (
    <>
      <CalcForm onChange={onChange} />
      <CalcResults />
    </>
  );
}
