import type { CalcData } from '../types';

export function CalcResults({ data }: { data: CalcData }) {
  return <>{data.type}</>;
}
