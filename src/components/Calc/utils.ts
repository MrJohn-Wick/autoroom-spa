import auctions from '@autrm/datas/auctions.json';

export function getAuctions(): Array<string> {
  return [...new Set(auctions.map((item) => item.auction))];
}

export function getLocations(auction: string | undefined): Array<string> {
  if (!auction) return [];

  const locations: Array<string> = auctions
    .filter((item) => item.auction === auction)
    .map((item) => item.location);

  return locations;
}
