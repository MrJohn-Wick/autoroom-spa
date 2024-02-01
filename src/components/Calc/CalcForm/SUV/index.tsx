import { Checkbox } from 'antd';
import { useState } from 'react';

export function SUV() {
  const [suv, setSUV] = useState(false);

  return (
    <div>
      <Checkbox
        checked={suv}
        onChange={(e) => setSUV(e.target.checked)}
      >
        Внедорожник
      </Checkbox>
    </div>
  );
}
