import { Checkbox } from 'antd';
import { useState } from 'react';

export function Benefit() {
  const [benefit, setBenefit] = useState(false);

  return (
    <div>
      <Checkbox
        checked={benefit}
        onChange={(e) => setBenefit(e.target.checked)}
      >
        Льготная растаможка
      </Checkbox>
    </div>
  );
}
