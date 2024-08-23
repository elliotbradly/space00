export const initHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  return cpy;
};

export const updateHexdata = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  //cpy.scale = Number(bal.val);

  return cpy;
};

export const openHexdata = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var scale = 2;
  if (cpy.scale != -1) scale = cpy.scale;

  var hex = [];
  var map = [];

  var data = bal.dat;

  if (cpy.scale == -1) {
    while (hex.length < 3) {
      scale += 1;
      hex = polyfill(data.coordinates, scale, true);
    }

    scale += 1;
    if (scale > 15) scale = 15;
    if (scale == 5) scale = 7;
  }

  //'7 	1.220629759 km 0.7584641686302 mile

  //if (scale > 10 && scale < 14) scale = 13;
  //else scale = 15;
  //if (scale < 10) scale = 7;

  //scale = 15;
  //scale = 5;
  //cpy.scale = scale;

  hex = polyfill(data.coordinates, scale, true);

  if (cpy.scale == -1) cpy.scale = scale;

  console.log("SCALE " + scale);

  var left = null;
  var right = null;
  var top = null;
  var bottom = null;
  var width = 0;
  var height = 0;

  var edge = {};

  //var clr = color.match(data.name, 1)[0];

  var colorIDX = bal.idx;

  //need to comment this out so the whole thing would work
  //pivot(ste, PVT.CLR, HkeHue.INDEX, B.MATCH, { idx: colorIDX });
  //var clr = query(ste, PVT.CLR, HrkHue.MATCH_LIST)[0];

  hex.forEach((a, b) => {
    var center = h3ToGeo(a);

    var t = trim(scale);

    var xDex = Math.abs(Number(center[1].toFixed(t)));
    var yDex = Math.abs(Number(center[0].toFixed(t)));
    center[1] = xDex = Math.ceil(xDex * Math.pow(10, t));
    center[0] = yDex = Math.ceil(yDex * Math.pow(10, t));

    if (right == null) right = xDex;
    else if (xDex < right) right = xDex;
    if (left == null) left = xDex;
    else if (xDex > left) left = xDex;

    if (top == null) top = yDex;
    else if (yDex > top) top = yDex;
    if (bottom == null) bottom = yDex;
    else if (yDex < bottom) bottom = yDex;

    var saveData = { hex: a, center: center, color: null };

    //ned to comment this out please add back
    //if (clr == null) return;
    //if (clr.hex == null) return;
    //pivot(ste, PVT.CLR, HkeHue.INDEX, B.MAKE, { idx: clr.hex });
    //saveData.color = query(ste, PVT.CLR, HrkHue.COLOR);

    //saveData.color = this.color.leaf(clr.hex);

    delete saveData.color.rgb;
    delete saveData.color.distance;

    edge[a] = saveData;

    map.push(saveData);
  });

  map.forEach((a, b) => {
    var center = a.center;
    center[1] = left - center[1];
    center[0] = top - center[0];
    map[b].center = center;
  });

  var grid0 = [];
  map.forEach((a) => {
    var x = a.center[1];
    var y = a.center[0];
    grid0.push({ hex: a.hex, x: x, y: y });
  });

  grid0.sort(function (a, b) {
    return a.y - b.y;
  });

  grid0.forEach((a, b) => {
    grid0[b] = { hex: a.hex, x: a.x, y: b };
  });

  grid0.sort(function (a, b) {
    return a.x - b.x;
  });

  var maxX = 0;
  var maxY = 0;

  grid0.forEach((a, b) => {
    grid0[b] = { hex: a.hex, x: b, y: a.y };
    edge[a.h] = grid0[b];
    if (grid0[b].x > maxX) maxX = grid0[b].x;
    if (grid0[b].y > maxY) maxY = grid0[b].y;
  });

  var connect = {};
  grid0.forEach((a, b) => {
    var hex = a.hex;

    var ring0: any = hexRing(hex, 1);
    ring0.forEach((c, d) => {
      ring0[d] = { dex: d, hex: c, x: a.x, y: a.y };
    });

    var ring1 = [];
    ring0.forEach((c) => {
      if (edge[c.hex] == null) return;
      c.x = edge[c.hex].x;
      c.y = edge[c.hex].y;
      ring1.push(c);
    });

    var id = hex;
    connect[id] = ring1;
  });

  console.log("valley of the cube");

  var cubeList = [];
  var cube = {};

  var now = { q: 0, r: 0, s: 0 };

  var cubeCount = hex.length;

  var cubeCheck = (hex: string, q: number, r: number, s: number) => {
    var lst = connect[hex];
    lst.forEach((a) => {
      var next = { hex: a.hex, q: q, r: r, s: s };
      switch (a.dex) {
        case 0:
          next.q += 1;
          next.r -= 1;
          next.s += 0;
          break;
        case 1:
          next.q += 0;
          next.r -= 1;
          next.s += 1;
          break;
        case 2:
          next.q -= 1;
          next.r += 0;
          next.s += 1;
          break;
        case 3:
          next.q -= 1;
          next.r += 1;
          next.s += 0;
          break;
        case 4:
          next.q += 0;
          next.r += 1;
          next.s -= 1;
          break;
        case 5:
          next.q += 1;
          next.r += 0;
          next.s -= 1;
          break;
      }

      if (cube[a.hex] != null) return;
      cube[a.hex] = next;
      cubeCount -= 1;
      process.nextTick(() => cubeCheck(a.hex, next.q, next.r, next.s));
    });
  };

  var open = grid0[0];
  if (open == null) return;
  var value = { hex: open.hex, q: 0, r: 0, s: 0 };
  cube[open.hex] = value;
  cubeCheck(open.hex, 0, 0, 0);

  var endCheck = () => {
    //console.log("cube count " + cubeCount);

    if (cubeCount > 1) return process.nextTick(endCheck);

    for (var key in cube) cubeList.push(cube[key]);

    //var endLOC0 = "../dat/hex/" + data.type;

    //var endLOCAL = "./data/hex/";

    //var file0 = endLOC0;

    //FS.ensureDirSync(endLOC0);
    //FS.ensureDirSync(endLOCAL);

    //var num = FS.readdirSync(endLOC0).length;

    //var numVal = "";
    //if (data.scale < 10)
    //numVal = String(num).padStart(3, "0");
    // else numVal = String(num).padStart(3, "0");
    //var sclVal = String(scale).padStart(2, "0");
    //var sizeVal = String(hex.length).padStart(3, "0");

    //var file =
    //  numVal +
    //  "." +
    //  sclVal +
    //  "." +
    //  sizeVal +
    //  "." +
    //  data.nom +
    //  "." +
    //  data.type +
    //  ".json";

    //var file1 = endLOC0 + "/" + file;
    //var fileloc = endLOCAL + "/" + file;
    //console.log("pop here " + file1);

    var endMap = {};
    map.forEach((a) => {
      endMap[a.hex] = a;
    });

    //var entrance = this.fate.pick(map);

    //pivot(ste, PVT.FTE, HkeFtr.INDEX, B.MATCH, { idx: data.name });
    //var entrance = query(ste, PVT.FTE, HrkFtr.VALUE);

    //debugger

    //var size = [1, 2, 3, 3, 3, 4, 5];

    //pivot(ste, PVT.FTE, HkeFtr.INDEX, B.SELECT, { lst: size });
    //var right = query(ste, PVT.FTE, HrkFtr.VALUE);

    //var exits = {};

    //for (var i = 0; i < right; i++) {
    //var item = this.fate.pick(map);

    //  pivot(ste, PVT.FTE, HkeFtr.INDEX, B.SELECT, { lst: map });
    //  var item = query(ste, PVT.FTE, HrkFtr.VALUE);

    //  exits[item.hex] = item;
    // }

    //var colors = {};
    //map.forEach((a) => {
    //  debugger
    //  var id = slugify(a.color.name);
    //  if (colors[id] != null) return (colors[id] += 1);
    // colors[id] = 1;
    //});

    //var keys = Object.keys(colors);

    // keys.sort(function (a: any, b: any) {
    //   return b - a;
    // });

    //  var colorKey = {};

    //  keys.forEach((a) => {
    //    colorKey[a] = colors[a];
    //  });

    //  var exitLst = [];
    //  exitLst.push({ hex: "hex", nom: "good-time-gate" });
    //  exitLst.push({ hex: "hex", nom: "west-gate" });
    //  exitLst.push({ hex: "hex", nom: "east-gate" });
    //  exitLst.push({ hex: "hex", nom: "south-gate" });

    //got get that height and width

    //BOOOM BOOM BOOM
    ///here is where the LAND OBJECT GETS CREATED

    //  debugger

    //  pivot(ste, PVT.FTE, HkeFtr.INDEX, B.MATCH, { idx: data.name, val: 1 });
    //  var coloring = query(ste, PVT.FTE, HrkFtr.VALUE);

    var dat = {
      name: data.name,
      nom: data.nom,
      type: data.territory,
      ambit: data.territory,
      lot: "lot",
      slot: "slot",
      space: data.nom,
      flavor: "",
      //  shade: colorKey,
      //  exits: exitLst,
      scale: scale,
      size: hex.length,
      width: maxX,
      height: maxY,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      //file: file1,
      //  color: coloring,
      map: endMap,
      //grid: connect,
      cube: cubeList,
      grid: null,
    };

    const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
      size: Number(1), // default: 1
      orientation: "pointy",
    });

    const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);

    var copied = clone(dat);

    copied.cube.forEach((a, b) => {
      const hexPrototype = { size: 1, hex: "value" };
      var Hex = Honeycomb.extendHex(hexPrototype);
      copied.cube[b] = Hex().cubeToCartesian({ q: a.q, r: a.r, s: a.s });
      copied.cube[b].hex = a.hex;
    });

    var lesserX = 0;
    var lesserY = 0;
    var mightyX = 0;
    var mightyY = 0;

    copied.cube.forEach((a) => {
      if (a.x < lesserX) lesserX = a.x;
      if (a.x > mightyX) mightyX = a.x;
      if (a.y < lesserY) lesserY = a.y;
      if (a.y > mightyY) mightyY = a.y;
    });

    dat.left = lesserX;
    dat.right = mightyX;
    dat.top = lesserY;
    dat.bottom = mightyY;

    const grid: any = Grid(copied.cube);
    var hY = grid.pointHeight();
    var wX = grid.pointWidth();

    dat.width = grid.pointWidth();
    dat.height = grid.pointHeight();

    //what the heck juice

    dat.grid = grid;

    cpy.idxMap = dat.nom;
    cpy.currentMap = dat;

    console.log("harverst " + cpy.idxMap);

    //if (bal.pvt == null) return cpy;

    //var bale = { dat };

    //callback
    //pivot(ste, bal.pvt.pvt, bal.pvt.hke, bal.pvt.mth, bale);

    // FS.ensureFileSync(dat.file);
    // FS.writeJSONSync(dat.file, dat);
    // console.log("writing " + dat.file);

    // FS.ensureFileSync(fileloc);
    // FS.writeJSONSync(fileloc, dat);

    //var file2 = endLOC1;
    //var file3 = file2 + "/" + file;
    //ensureDir(file2);
    //writeJSONSync(file3, dat);

    //cb(dat);
  };

  process.nextTick(endCheck);

  return cpy;
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

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

var trim = (val) => {
  var dat = 0;

  switch (val) {
    case 1:
      dat = 0;
      break;
    case 2:
      dat = 0;
      break;
    case 3:
      dat = 0;
      break;
    case 4:
      dat = 1;
      break;
    case 5:
      dat = 1;
      break;
    case 6:
      dat = 5;
      break;
    case 7:
      dat = 5;
      break;
    case 8:
      dat = 5;
      break;
    case 9:
      dat = 5;
      break;
    case 10:
      dat = 5;
      break;
    case 11:
      dat = 6;
      break;
    case 12:
      dat = 6;
      break;
    case 13:
      dat = 6;
      break;
    case 14:
      dat = 6;
      break;
    default:
      dat = 6;
  }

  return dat;
};

import { HexmapModel } from "../mod/hexmap.model";
import HexmapBit from "../fce/hexmap.bit";
import * as Honeycomb from "honeycomb-grid";
import State from "../../00.core/state";
import HexItem from "../fce/hex-item.bit";
import * as S from "string";

import * as FS from "fs-extra";

import * as B from "../../00.core/constant/BASIC";

import * as PVT from "../../val/pivot";

import { h3ToGeo, hexRing, polyfill } from "h3-js";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";

import { slugify, isBlank, include } from "underscore.string";

//import * as HkeHue from "../../hke/hue.hike";
//import * as HrkHue from "../../hrk/hue.hark";

import * as clone from "clone-deep";
