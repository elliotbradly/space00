export default interface HexmapBit {
  idx: string;
  src?: string;
  name?: string;
  nom?: string;
  orient?: string;
  scale?: number;
  area?: number;
  size?: SizeBit;
  grid?: any;
  cube?: any;
  x?: number;
  y?: number;
  h?: number;
  w?: number;
  dex?: number;
  dat?: any;
  lst: any;
}

import SizeBit from "../fce/size.bit";

//var dat = {
//  name: data.name,
//  nom: data.nom,
//  type: data.territory,
//  ambit: data.territory,
//  lot: "lot",
//  slot: "slot",
//  space: data.nom,
//  flavor: "",
//  shade: colorKey,
//  exits: exitLst,
//  scale: scale,
//  size: hex.length,
//  width: maxX,
//  height: maxY,
//  left: 0,
//  right: 0,
//  top: 0,
//  bottom: 0,
//  file: file1,
//  color: coloring,
//  map: endMap,
//  grid: connect,
//  cube: cubeList,
//  grid: null,
//};
//name?: string;
//nom?: string;
//type?: string;
//ambit?: string;
//lot?: string;
//slot?: string;
//space?: string;
//flavor?: string;
//shade?: string;
//exits?: string[];
//scale?: number;
//size?: number;
//width?: number;
//height?: number;
//left?: number;
//right?: number;
//top?: number;
//btm?: number;
//file?: string;
//color?: any;
//map?: any;
//grid?: any;
//cube?: any;

//after
//src?: string;
//w?: number;
//h?: number;
//x?: number;
//y?: number;
//dex?: number;
//orient?: string;
//graph?: string;
//dat?: any;
//val?: any;
//pvt?: any;
