import BondBit from "./bond.bit.interface";

export default interface FocusBit {
  idx: string;
  src?: string;
  hex: string;
  map: string;
  x: number;
  y: number;
  dex?: number;
  grph?: string;

  bonds?: any;
  bondList?: BondBit[];
  pastList?: string[];

  move?: string;
  turn?: string;
  turnSpeed: number;

  fce?: string; // this will get converted into a string 
  face?: string;
  past?: string[];
  camX?: number;
  camY?: number;

  viewList?: BondBit[];

  clock?: number; //do you even use this
  update?: number;
  updateSpeed?: number;
  creation?: number;

  spin?: boolean;
}
