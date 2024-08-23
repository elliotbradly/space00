import BondBit from "./bond.bit.interface";

export default interface FocusBit {
  idx: string;
  hex: string;
  x: number;
  y: number;
  dex?: number;
  grph?: string;

  bonds?: any;
  bondList?: BondBit[];

  move?: string;
  turn?: string;
  turnSpeed: number;

  face?: string;
  camX?: number;
  camY?: number;

  clock?: number; //do you even use this
  update?: number;
  updateSpeed?: number;
  creation?: number;
}
