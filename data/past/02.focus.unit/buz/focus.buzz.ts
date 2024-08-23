import * as FocAct from "../Focus.action";
import * as HexAct from "../../01.hexmap.unit/hexmap.action";

var contentIDX = "focusPage";
var testing = "...";

export const initFocus = (cpy: FocusModel, bal: FocusUnitBit, ste: State) => {
  if (bal != null && bal.lst != null) {
    cpy.fociList = bal.lst;
    cpy.fociList.forEach((a) => {
      if (cpy.foci[a.idx] != null) cpy.foci[a.idx] = a;
    });
  }

  cpy.test = { idx: "init-focus" };

  return cpy;
};

export const addFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  if (bal.src == null) throw new Error("add focus bale no src " + bal.idx);

  var bit = cpy.fociList[cpy.foci[bal.idx]];
  if (bit == null) throw new Error("focus bit not present " + bal.idx);

  bit.src = bal.src;
  bit.x = bal.x;
  bit.y = bal.y;

  //you have this in here twice
  //it is some kind of range checker
  patch(ste, HexAct.READ_HEXMAP, { idx: bit.src });

  var hexmapModel: HexmapModel = ste.value.hexmap;
  var map: HexmapBit = hexmapModel.readHexmap;
  var cube = map.cube;
  var grid = map.grid;

  var testIDX = map.idx + "-" + bit.x + "-" + bit.y;

  if (cube[testIDX] == null) {
    var item = grid[0];
    bit.x = item.x;
    bit.y = item.y;
  }

  cpy.readFocus = bit;

  return cpy;
};

export const spinRightFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var foci: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("no focus to move backward " + bal.idx);

  switch (foci.face) {
    case RCT.EAST:
      foci.face = RCT.SOUTH_EAST;
      break;

    case RCT.SOUTH_EAST:
      foci.face = RCT.SOUTH_WEST;
      break;

    case RCT.SOUTH_WEST:
      foci.face = RCT.WEST;
      break;

    case RCT.WEST:
      foci.face = RCT.NORTH_WEST;
      break;

    case RCT.NORTH_WEST:
      foci.face = RCT.NORTH_EAST;
      break;

    case RCT.NORTH_EAST:
      foci.face = RCT.EAST;
      break;
  }

  var update: FocusUpdateBit = { idx: foci.idx, move: foci.face, src: foci.src };
  patch(ste, FocAct.UPDATE_FOCUS, update);
  patch(ste, FocAct.READ_FOCUS, update);
};

export const spinLeftFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var foci: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("no focus to move backward " + bal.idx);

  switch (foci.face) {
    case RCT.EAST:
      foci.face = RCT.NORTH_EAST;
      break;

    case RCT.NORTH_EAST:
      foci.face = RCT.NORTH_WEST;
      break;

    case RCT.NORTH_WEST:
      foci.face = RCT.WEST;
      break;

    case RCT.WEST:
      foci.face = RCT.SOUTH_WEST;
      break;

    case RCT.SOUTH_WEST:
      foci.face = RCT.SOUTH_EAST;
      break;

    case RCT.SOUTH_EAST:
      foci.face = RCT.EAST;
      break;
  }

  var update: FocusUpdateBit = { idx: foci.idx, move: foci.face, src: foci.src };
  patch(ste, FocAct.UPDATE_FOCUS, update);
  patch(ste, FocAct.READ_FOCUS, update);
};

export const moveForwardFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var foci: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("list vision focus : no foci " + bal.idx);

  var move;

  switch (foci.face) {
    case RCT.EAST:
      move = RCT.EAST;
      break;

    case RCT.NORTH_EAST:
      move = RCT.SOUTH;
      break;

    case RCT.NORTH_WEST:
      move = RCT.NORTH;
      break;

    case RCT.WEST:
      move = RCT.WEST;
      break;

    case RCT.SOUTH_WEST:
      move = RCT.SOUTH;
      break;

    case RCT.SOUTH_EAST:
      move = RCT.SOUTH;
      break;
  }

  var update: FocusUpdateBit = { idx: foci.idx, move: move, src: foci.src };
  patch(ste, FocAct.UPDATE_FOCUS, update);
  patch(ste, FocAct.READ_FOCUS, update);

  //cpy.test = cpy.readFocus;

  return cpy;
};

export const moveBackwardFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  //cpy.test = cpy.readFocus;
  var foci: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("no focus to move backward " + bal.idx);

  switch (foci.face) {
    case RCT.EAST:
      foci.face = RCT.WEST;
      break;

    case RCT.NORTH_EAST:
      foci.face = RCT.SOUTH_WEST;
      break;

    case RCT.NORTH_WEST:
      foci.face = RCT.SOUTH_EAST;
      break;

    case RCT.WEST:
      foci.face = RCT.EAST;
      break;

    case RCT.SOUTH_WEST:
      foci.face = RCT.NORTH_EAST;
      break;

    case RCT.SOUTH_EAST:
      foci.face = RCT.NORTH_EAST;
      break;
  }

  var update: FocusUpdateBit = { idx: foci.idx, move: foci.face, src: foci.src };
  patch(ste, FocAct.UPDATE_FOCUS, update);
  patch(ste, FocAct.READ_FOCUS, update);
};

export const writeFaceFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var foci: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("list vision focus : no foci");

  if (foci.past == null) foci.past = [];
  foci.past.unshift(foci.face);
  if (foci.past.length > 5) foci.past.splice(-1, 1);

  foci.face = bal.fce;

  cpy.fociList[cpy.foci[bal.idx]] = foci;
  //cpy.test = foci.face;

  return cpy;
};

export const listVisonFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var foci = cpy.fociList[cpy.foci[bal.idx]];
  if (foci == null) throw new Error("list vision focus : no foci");

  if (foci.src == null) throw new Error("foci : no src " + bal.idx);

  var grid = ste.value.hexmap.hc.gridList[ste.value.hexmap.hc.grids[foci.src]];
  if (grid == null) throw new Error("list vision focus : no grid");

  var output = [];
  var size = 20;
  var last = grid.get({ x: foci.x, y: foci.y });
  for (var i = 0; i < size; i++) {
    if (last != null) {
      var item = grid.neighborsOf(last, compassConvertor(foci.face));
      if (item[0] != null) {
        output.push({ x: item[0].x, y: item[0].y });
        last = grid.get({ x: item[0].x, y: item[0].y });
      }
    }
  }

  //var item = grid.neighborsOf(hex, compassConvertor(RCT.EAST));
  //if (item[0] != null) output.push({ x: item[0].x, y: item[0].y });

  foci.viewList = output;

  cpy.readFocus = foci;

  // cpy.test = foci;

  return cpy;
};

export const readFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  cpy.readFocus = cpy.fociList[cpy.foci[bal.idx]];

  if (cpy.readFocus == null) cpy.readFocus = { idx: "focus not present" };
  return cpy;
};

export const openFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var bit: FocusBit = bal;
  if (cpy.foci[bit.idx] != null) return (cpy.test = { foc: cpy.fociList[cpy.foci[bit.idx]] });
  bit.x = Number(bit.x);
  bit.y = Number(bit.y);
  bit.src = bal.src;

  if (bit.src == null) throw new Error("open focus contains no source for " + bal.idx);

  if (isNaN(bit.x)) bit.x = 0;
  if (isNaN(bit.y)) bit.y = 0;

  if (bit.x == null) bit.x = 0;
  if (bit.y == null) bit.y = 0;

  if (bit.face == null) bit.face = "E";
  if (bit.past == null) bit.past = [];

  if (bit.update == null) bit.update = 0;
  if (bit.clock == null) bit.clock = 0;
  if (bit.updateSpeed == null) bit.updateSpeed = 11;
  if (bit.turnSpeed == null) bit.turnSpeed = 11;

  if (bit.creation == null) bit.creation = moment().valueOf();

  if (bit.camX == null) bit.camX = 0.5;
  if (bit.camY == null) bit.camY = 0.5;

  if (bit.spin == null) bit.spin = true;

  //now open up the map and and make sure this is a legal placment

  patch(ste, HexAct.READ_HEXMAP, { idx: bit.src });

  var hexmapModel: HexmapModel = ste.value.hexmap;
  var map: HexmapBit = hexmapModel.readHexmap;
  var cube = map.cube;
  var grid = map.grid;

  var testIDX = map.idx + "-" + bit.x + "-" + bit.y;

  if (cube[testIDX] == null) {
    var item = grid[0];
    bit.x = item.x;
    bit.y = item.y;
  }

  bit.dex = cpy.fociList.length;
  cpy.foci[bit.idx] = bit.dex;
  cpy.fociList.push(bit);

  cpy.count = cpy.fociList.length;
  cpy.currentFoci = bit.idx;

  //patch(ste, ACT.LIST_VISON_FOCUS, bit);

  cpy.readFocus = bit;
  return cpy;
};

export const updateFocus = (cpy: FocusModel, bal: FocusUpdateBit, ste: any) => {
  var bit: FocusBit = cpy.fociList[cpy.foci[bal.idx]];

  if (bit == null) throw new Error("no bit present for update focus");
  bit.move = bal.move;
  bit.src = bal.src;

  if (bit.move == null) throw new Error("no move present for update focus");

  //delay the amount of time before the next move
  var now = moment().valueOf();
  var next = bit.update + bit.updateSpeed;
  if (bit.turn != null) next = bit.update + bit.turnSpeed;
  if (next > now) {
    checkTurn(cpy, bal, ste);
    if (bal.pvt != null) pivot(ste, bal.pvt.pvt, bal.pvt.hke, bal.pvt.mth, bal.pvt.dat);
    return;
  }

  bit.update = now;

  //provides you with the next hex for you to move into if available
  resizeFocus(cpy, bit, ste);
  var bond: Bond = move(bit, ste);

  cpy.test = "bond " + bond;

  if (bond != null) {
    bit.x = bond.x;
    bit.y = bond.y;
    bit.turn = null;
  }

  if (bit.turn != null) patch(ste, FocAct.WRITE_FACE_FOCUS, { idx: bit.idx, fce: bit.turn });

  //bit.face = bit.turn;
  patch(ste, FocAct.LIST_VISON_FOCUS, { idx: bit.idx, map: bit.src });

  checkTurn(cpy, bal, ste);
  console.log(bal.idx + " turn checked " + bal.move);
  if (bit.past == null) bit.past = [];

  //if (bit.pastList.length > 4) {
  //  if (bit.pastList[0] == bit.pastList[2]) {

  //    console.log("poop out of a whole")
  //    bit.turn = RCT.NORTH
  //    bit.pastList = []
  //    bal.move = RCT.NORTH
  //    checkTurn(cpy, bal, ste);

  //  }
  //}

  replaceFocus(cpy, bit, ste);

  console.log("end update focus");
  //``cpy.test = bit;
  //patch(ste, ACT.REPLACE_FOCUS, bit);

  //if (bal.pvt != null) pivot(ste, bal.pvt.pvt, bal.pvt.hke, bal.pvt.mth, bal.pvt.dat);
  //console.log("direct " + item.direct);
  //console.log("sides " + JSON.stringify(bit.bondList));

  return cpy;
};

//why is this called resize focus
//give you the cordinates of the next move

export const resizeFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  var bit: FocusBit = cpy.fociList[cpy.foci[bal.idx]];

  if (bit == null) return console.warn("can not find bit for " + bal.idx);

  //now find the grid
  var hMod: HexmapModel = ste.value.hexmap;
  //var hexBit: HexBit = hMod.hexBitList[hMod.hexBits[bit.src]];
  var grid: Honeycomb.Grid = hMod.hc.gridList[hMod.hc.grids[bit.src]];

  if (grid == null) throw new Error("no map present for " + bal.src);

  var hex = grid.get({ x: bit.x, y: bit.y });
  bit.bonds = {};
  var item;

  item = grid.neighborsOf(hex, compassConvertor(RCT.EAST));
  if (item[0] != null) bit.bonds[RCT.EAST] = { x: item[0].x, y: item[0].y };

  item = grid.neighborsOf(hex, compassConvertor(RCT.SOUTH_EAST));
  if (item[0] != null) bit.bonds[RCT.SOUTH_EAST] = { x: item[0].x, y: item[0].y };

  item = grid.neighborsOf(hex, compassConvertor(RCT.SOUTH_WEST));
  if (item[0] != null) bit.bonds[RCT.SOUTH_WEST] = { x: item[0].x, y: item[0].y };

  item = grid.neighborsOf(hex, compassConvertor(RCT.WEST));
  if (item[0] != null) bit.bonds[RCT.WEST] = { x: item[0].x, y: item[0].y };

  item = grid.neighborsOf(hex, compassConvertor(RCT.NORTH_WEST));
  if (item[0] != null) bit.bonds[RCT.NORTH_WEST] = { x: item[0].x, y: item[0].y };

  item = grid.neighborsOf(hex, compassConvertor(RCT.NORTH_EAST));
  if (item[0] != null) bit.bonds[RCT.NORTH_EAST] = { x: item[0].x, y: item[0].y };

  return cpy;
};

//move to any where on the map
export const replaceFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  cpy.fociList[cpy.foci[bal.idx]] = bal;
  cpy.readFocus = bal;

  console.log(bal.idx + " focus replaced");

  //if (cpy.readFocus == null) throw new Error("no read focus when replacing ");
  //check and see what event may have occurred

  return cpy;
};

export const closeFocus = (cpy: FocusModel, bal: FocusBit, ste: State) => {
  debugger;
  return cpy;
};

var move = (bit, ste) => {
  var bond;
  switch (bit.move) {
    case RCT.EAST:
      bond = moveEast(bit, ste);
      break;

    case RCT.WEST:
      bond = moveWest(bit, ste);
      break;

    case RCT.NORTH:
      bond = moveNorth(bit, ste);
      break;

    case RCT.SOUTH:
      bond = moveSouth(bit, ste);
      break;
  }

  return bond;
};

var moveEast = (bit: FocusBit, ste) => {
  console.log("moving east " + bit.move + "::: " + bit.face);

  if (bit.move == bit.face) return advance(bit);
  turn(bit, RCT.EAST, ste);
};

var moveWest = (bit: FocusBit, ste) => {
  console.log("moving west " + bit.move + "::: " + bit.face);

  if (bit.move == bit.face) return advance(bit);
  turn(bit, RCT.WEST, ste);
};

var moveNorth = (bit: FocusBit, ste) => {
  if (bit.face == RCT.NORTH_WEST) {
    var item = advance(bit);
    if (item == null) patch(ste, FocAct.WRITE_FACE_FOCUS, { idx: bit.idx, fce: RCT.NORTH_EAST });
    //bit.past.push(null);
    return item;
  }

  if (bit.face == RCT.NORTH_EAST) {
    var item = advance(bit);
    if (item == null) patch(ste, FocAct.WRITE_FACE_FOCUS, { idx: bit.idx, fce: RCT.NORTH_WEST });
    //bit.past.push(null);
    return item;
  }

  turn(bit, RCT.NORTH, ste);
};

var moveSouth = (bit: FocusBit, ste) => {
  if (bit.face == RCT.SOUTH_WEST) {
    var item = advance(bit);
    if (item == null) patch(ste, FocAct.WRITE_FACE_FOCUS, { idx: bit.idx, fce: RCT.SOUTH_EAST });
    return item;
  }

  if (bit.face == RCT.SOUTH_EAST) {
    var item = advance(bit);
    if (item == null) patch(ste, FocAct.WRITE_FACE_FOCUS, { idx: bit.idx, fce: RCT.SOUTH_WEST });
    return item;
  }

  //if (bit.face == RCT.NORTH_WEST) bit.face = RCT.WEST;

  turn(bit, RCT.SOUTH, ste);
};

var turn = (bit: FocusBit, target, ste) => {
  switch (bit.face) {
    case RCT.EAST:
      if (target == RCT.WEST) bit.turn = RCT.SOUTH_EAST;
      if (target == RCT.SOUTH) bit.turn = RCT.SOUTH_EAST;
      if (target == RCT.NORTH) bit.turn = RCT.NORTH_EAST;
      //if target === this and history[0] == that
      //if (target == direct.WEST) bit.face = direct.SOUTH_EAST

      break;

    case RCT.SOUTH_EAST:
      if (target == RCT.WEST) bit.turn = RCT.SOUTH_WEST;
      if (target == RCT.EAST) bit.turn = RCT.EAST;
      if (target == RCT.NORTH) bit.turn = RCT.EAST;

      //if (target == direct.WEST) bit.face = direct.SOUTH_EAST

      break;

    case RCT.SOUTH_WEST:
      if (target == RCT.WEST) bit.turn = RCT.WEST;
      if (target == RCT.EAST) bit.turn = RCT.SOUTH_EAST;
      break;

    case RCT.WEST:
      if (target == RCT.EAST) bit.turn = RCT.SOUTH_WEST;
      if (target == RCT.SOUTH) bit.turn = RCT.SOUTH_WEST;
      if (target == RCT.NORTH) bit.turn = RCT.NORTH_WEST;

      break;

    case RCT.NORTH_WEST:
      if (target == RCT.EAST) bit.turn = RCT.NORTH_EAST;
      if (target == RCT.WEST) bit.turn = RCT.WEST;
      break;

    case RCT.NORTH_EAST:
      if (target == RCT.WEST) bit.turn = RCT.NORTH_WEST;
      if (target == RCT.EAST) bit.turn = RCT.EAST;
      if (target == RCT.SOUTH) bit.turn = RCT.EAST;
      break;

    case RCT.NORTH:
      moveNorth(bit, ste);
      break;

    case RCT.SOUTH:
      moveSouth(bit, ste);
      break;
  }

  console.log("show me the turn " + bit.turn);
};

//move to a space
var advance = (bit: FocusBit) => {
  //console.log("advance " + JSON.stringify(bit));

  if (bit == null) return;
  if (bit.face == null) return;

  bit.turn = null;
  if (bit.bonds == null) return;
  //grab bounds
  var item = bit.bonds[bit.face];
  //check to see if space is occupied
  //occupied return nothing

  return item;
};

var checkTurn = (cpy: FocusModel, bal: FocusUpdateBit, ste: State) => {
  var bit: FocusBit = cpy.fociList[cpy.foci[bal.idx]];
  if (bit == null) return console.warn("can not find bit for " + bal.idx);
  if (bit.turn == null) return console.log("no turn");

  //if (requestAnimationFrame != null) requestAnimationFrame(() => patch(ste, ACT.UPDATE_FOCUS, bal));
  //else {
  setImmediate(() => {
    patch(ste, FocAct.UPDATE_FOCUS, bal);
  });

  // }
};

var compassConvertor = (val: string) => {
  var result = 0;
  switch (val) {
    case RCT.NORTH_EAST:
      result = 5;
      break;

    case RCT.EAST:
      result = 0;
      break;

    case RCT.SOUTH_EAST:
      result = 1;
      break;

    case RCT.SOUTH_WEST:
      result = 2;
      break;

    case RCT.WEST:
      result = 3;
      break;

    case RCT.NORTH_WEST:
      result = 4;
      break;
  }

  return result;
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var patch = (ste, type, bale?) => ste.dispatch({ type, bale });

var pivot = (ste, pvt, hke, mth, dat?) => {
  ste.dispatch({
    type: ActTtl.PULL_PIVOT,
    bale: {
      pvt,
      hke,
      mth,
      dat,
    },
  });
};

import * as moment from "moment";

import * as B from "../../00.core/constant/BASIC";
import * as PVT from "../../val/pivot";
import * as RCT from "../../val/direction";

import * as HKE from "../Focus.hike";

import { FocusModel } from "../focus.model";
import FocusBit from "../fce/focus.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";
import { HexmapModel } from "../../01.hexmap.unit/mod/hexmap.model";
import HexmapBit from "../../01.hexmap.unit/fce/hexmap.bit";

import Bond from "../../01.hexmap.unit/fce/bond.interface";
import HexBit from "../../01.hexmap.unit/fce/hex.bit.interface";
import * as Honeycomb from "honeycomb-grid";
import FocusUpdateBit from "../fce/focus-update.bit.interface";
import FocusUnitBit from "../fce/focus-unit.bit";
import { copyFile } from "node:fs";
import { bindCallback } from "rxjs";

///code below here

//focus
