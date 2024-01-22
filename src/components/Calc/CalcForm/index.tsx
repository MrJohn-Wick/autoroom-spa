import { useEffect, useState } from 'react';

import auctions from '@autrm/datas/auctions.json';

export function CalcForm({ onChange }: { onChange: any }) {
  const auctionsMap = [...new Set(auctions.map((i) => i.auction))];
  const [auction, setAuction] = useState(auctionsMap[0]);

  useEffect(() => {
    onChange();
  }, [auction, onChange]);

  return (
    <form>
      <div className="field">
        <label htmlFor="" />
        <select
          value={auction}
          onChange={(e) => setAuction(e.target.value)}
        >
          {auctions.map((a, i) => (
            <option value={i}>{a.auction}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
