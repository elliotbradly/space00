import * as ActHexmap from "../hexmap.action";

export const initHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  cpy.test = { idx: "init-hexmap" };

  return cpy;
};

//var dat = {
//  name: data.name,
//  nom: data.nom,
//  orient:
//  scale: scale,
//  size: {width:1, height:1},
//  grid: null,
//};

//this creates a rectangle

export const openHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  if (bal.idx == null) throw new Error("open hex map :: no idx");

  if (bal.orient == null) bal.orient = "pointy";
  if (bal.h == null) bal.h = 11;
  if (bal.w == null) bal.w = 11;

  bal.size = { h: bal.h, w: bal.w };
  if (bal.area == null) bal.area = 1;

  bal.scale = 1; //min :1 , max:15

  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bal.area), // default: 1
    orientation: bal.orient, // default: 'pointy'
  });

  const Grid = Honeycomb.defineGrid(Hex);

  const grid = Grid.rectangle({ width: bal.size.w, height: bal.size.h });

  cpy.hc.hexFactories[bal.idx] = cpy.hc.hexFactoryList.length;
  cpy.hc.hexFactoryList.push(Hex);

  cpy.hc.gridFactories[bal.idx] = cpy.hc.gridFactoryList.length;
  cpy.hc.gridFactoryList.push(Grid);

  cpy.hc.grids[bal.idx] = cpy.hc.gridList.length;
  cpy.hc.gridList.push(grid);

  var hexList = [];

  //pulling out the most special hexes
  for (var key in grid) {
    var hex: Honeycomb.Hex<any> = grid.get({
      x: grid[key].x,
      y: grid[key].y,
    });

    if (hex == null) continue;

    var c = Hex().cartesianToCube({ x: hex.x, y: hex.y });

    //{ q: a.q, r: a.r, s: a.s

    //hexList.push(hex);
    //var idx = bal.idx + "-" + c.q + "-" + c.r + "-" + c.s;
    var idx = bal.idx + "-" + hex.x + "-" + hex.y;

    hexList.push(idx);

    cpy.hc.hexs[idx] = cpy.hc.hexList.length;
    cpy.hc.hexList.push(hex);
  }

  cpy.count += 1;

  bal.grid = grid;
  bal.dex = cpy.hexBitList.length;

  cpy.hexBitList.push(bal);
  cpy.hexBits[bal.idx] = bal.dex;
  //cpy.count = cpy.hexBitList.length;

  //cpy.test = cubeList;
  var hexcases = {};

  hexList.forEach((a) => {
    if (hexcases[a] == null) hexcases[a] = "";
  });

  var outline = [];

  bal.cube = hexcases;

  //  hexList.forEach((a) => {
  //    var xpos = String(a.x).padStart(3, "0");
  //    var ypos = String(a.y).padStart(3, "0");

  //    var idx = "hex-" + xpos + "-" + ypos + " : ";
  //    outline.push(idx);
  //var idx = "hex-" + xpos + "-" + ypos + " : ";
  //outline.push(idx);

  //for (var key in Direction) {
  //  var idx = "hex-" + xpos + "-" + ypos + "-" + key + " : ";
  //  outline.push(idx);
  // }
  //});

  //bal.lst = hexList;
  cpy.readHexmap = bal;

  //var clipboardy = require("clipboardy");
  //clipboardy.writeSync(outline.join("\n"));

  return cpy;
};

export const loadHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var dat = cpy.hexData[bal.idx];
  if (dat == null) throw new Error("can not load hexmap " + bal.idx);
  cpy.loadHex = dat;
  dat.idx = bal.idx;

  patch(ste, ActHexmap.ADD_HEXMAP, dat);

  return cpy;
};

export const addHexMap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  if (bal.area == null) bal.area = 100;
  if (bal.orient == null) bal.orient = "pointy";
  bal.area = Number(bal.size);
  bal.area = 33;

  bal["cube"].forEach((a, b) => {
    if (typeof a === "string" || a instanceof String) bal["cube"][b] = JSON.parse(String(a));
  });

  bal["grid"].forEach((a, b) => {
    if (typeof a === "string" || a instanceof String) bal["grid"][b] = JSON.parse(String(a));
  });

  if (bal.idx == null) bal.idx = "---";

  bal.idx = S(bal.idx).collapseWhitespace().s;

  if (bal.grid == null) return console.error("sorry you have no grid");

  if (cpy.hexBits[bal.idx] != null) {
    cpy.currentSrc = bal.src;
    cpy.test = cpy.hc.gridList[cpy.hc.grids[bal.idx]];
    return cpy;
  }

  bal.dex = cpy.hexBitList.length;

  cpy.hexBitList.push(bal);
  cpy.hexBits[bal.idx] = bal.dex;
  cpy.count = cpy.hexBitList.length;

  ///!!!! here is where we create the grid
  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bal.size), // default: 1
    orientation: bal.orient, // default: 'pointy'
  });

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);

  bal["cube"].forEach((a, b) => {
    const hexPrototype: HexItem = { size: 10, hex: "value" };

    var Hex = Honeycomb.extendHex(hexPrototype);
    bal.grid[b] = Hex().cubeToCartesian({ q: a.q, r: a.r, s: a.s });
    bal.grid[b].hex = a.hex;
  });

  const grid: Honeycomb.Grid = Grid(bal.grid);
  ///end of where we create grid

  cpy.hc.hexFactories[bal.idx] = cpy.hc.hexFactoryList.length;
  cpy.hc.hexFactoryList.push(Hex);

  cpy.hc.gridFactories[bal.idx] = cpy.hc.gridFactoryList.length;
  cpy.hc.gridFactoryList.push(Grid);

  for (var key in grid) {
    var hex: Honeycomb.Hex<any> = grid.get({
      x: grid[key].x,
      y: grid[key].y,
    });

    if (hex == null) continue;

    var idx = bal.idx + "-" + hex.x + "-" + hex.y;

    cpy.hc.hexs[idx] = cpy.hc.hexList.length;
    cpy.hc.hexList.push(hex);
  }

  cpy.hc.grids[bal.idx] = cpy.hc.gridList.length;
  cpy.hc.gridList.push(grid);

  cpy.count += 1;

  cpy.currentSrc = bal.src;
  cpy.test = grid;
  return cpy;

  //delete cpy.loadedLast;
  //cpy.loadedLast = bal.src;

  return cpy;
};

export const readHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var map = cpy.hexBitList[cpy.hexBits[bal.idx]];
  var grid = cpy.hc.gridList[cpy.hc.grids[bal.idx]];

  cpy.readHexmap = map;

  //cpy.readMap = map;
  //cpy.readGrid = grid;

  return cpy;
};

export const selectHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var fate = new chance("092125");
  //cpy.currentSrc = fate.pickone(cpy.hexmapSrcLst);
  return cpy;
};

export const updateHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  console.log("in the mud");

  //this is where we load the hex map full of intiatal things

  return cpy;
};

export const fetchHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var bale = cpy.hexBitList[cpy.hexBits[bal.idx]];

  ///!!!! here is where we creat the grid
  var Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bale.size), // default: 1
    orientation: bale.orient, // default: 'pointy'
  });

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);
  const hexCoordinates = Grid.pointToHex(Number(bal.x), Number(bal.y));

  //give us focus

  cpy.currentCord = hexCoordinates;

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import * as Direction from "../../val/direction";

import { HexmapModel } from "../mod/hexmap.model";
import HexmapBit from "../fce/hexmap.bit";
import * as Honeycomb from "honeycomb-grid";
import State from "../../00.core/state";
import HexItem from "../fce/hex-item.bit";
import * as S from "string";
import * as chance from "chance";

//var cubeList = [];
//hexList.forEach((a) => {
//  const hexPrototype = { size: bal.size, hex: "value" };
//  var Hex = Honeycomb.extendHex(hexPrototype);
//  var itm = Hex().cartesianToCube({ x: a.x, y: a.y });
//  itm["hex"] = "hexamte";
//  cubeList.push(itm);
// });

// bal.cube = cubeList;

// copied.cube.forEach((a, b) => {
//   const hexPrototype = { size: 1, hex: "value" };
//   var Hex = Honeycomb.extendHex(hexPrototype);
//   copied.cube[b] = Hex().cubeToCartesian({ q: a.q, r: a.r, s: a.s });
//   copied.cube[b].hex = a.hex;
// });
