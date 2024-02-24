import _ from 'lodash';

import auctions from '@autrm/datas/auctions.json';
import delivery from '@autrm/datas/delivery.json';
import vehicles from '@autrm/datas/vehicles.json';

import type { Vehicle } from './types';

export const USD_EUR = 0.92;
export const USD_BYN = 3.27;

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

export function getVehicles(): Vehicle[] {
  return vehicles;
}
export function getVehicle(v: string | undefined): Vehicle | undefined {
  const vehicles = getVehicles();

  return _.find(vehicles, {
    value: v,
  });
}

export function getSeaDelivery(c: string): number {
  if (!c) return 0;
  const d = _.find(delivery, (i) => i.city == c);

  return d ? d.value : 0;
}

export function getOurPrice(): number {
  return 700; //BYN
}

export function getTax(): number {
  return 120; //BYN
}

export function getSVH(): number {
  return 300; //BYN
}

export function getA1Duty(price: number, volume: number): number {
  let pc = 0.54;
  let vc = 2.5;
  const eprice = price * USD_EUR;
  if (eprice > 8500) {
    pc = 0.48;
    vc = 3.5;
  }
  if (eprice > 16700) {
    pc = 0.48;
    vc = 5.5;
  }
  if (eprice > 42300) {
    pc = 0.48;
    vc = 7.5;
  }
  if (eprice > 84500) {
    pc = 0.48;
    vc = 15;
  }
  if (eprice > 169000) {
    pc = 0.48;
    vc = 20;
  }
  const pd = eprice * pc;
  const vd = volume * vc;

  return vd > pd ? vd : pd;
}

export function getA2Duty(volume: number): number {
  let k = 1.5;
  if (volume > 1000) k = 1.7;
  if (volume > 1500) k = 2.5;
  if (volume > 1800) k = 2.7;
  if (volume > 2300) k = 3;
  if (volume > 3000) k = 3.6;

  return Math.round(volume * k);
}

export function getA3Duty(volume: number): number {
  let k = 3;
  if (volume > 1000) k = 3.2;
  if (volume > 1500) k = 3.5;
  if (volume > 1800) k = 4.8;
  if (volume > 2300) k = 5;
  if (volume > 3000) k = 5.7;

  return Math.round(volume * k);
}
