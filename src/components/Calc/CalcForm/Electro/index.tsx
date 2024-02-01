import { Checkbox } from 'antd';
import { useState } from 'react';

export function Electro() {
  const [electro, setElectro] = useState(false);

  return (
    <div>
      <Checkbox
        checked={electro}
        onChange={(e) => setElectro(e.target.checked)}
      >
        Электромобиль
      </Checkbox>
    </div>
  );
}
