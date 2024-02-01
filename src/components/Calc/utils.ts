import auctions from '@autrm/datas/auctions.json';
import vehicles from '@autrm/datas/vehicles.json';
import _ from 'lodash';

export function getAuctions(): Array<string> {
  return _.uniq(_.map(auctions, (a) => a.auction));
  // return [...new Set(auctions.map((item) => item.auction))];
}

export function getAuction(auction: string | undefined, location: string | undefined): any {
  if (auction && location)
    return auctions.filter((a) => a.auction == auction && a.location == location).at(0);

  return null;
}

export function getLocations(auction: string | undefined): Array<string> {
  if (!auction) return [];

  const locations: Array<string> = auctions
    .filter((item) => item.auction === auction)
    .map((item) => item.location);

  return locations;
}

export function getVehicles() {
  return vehicles;
}
