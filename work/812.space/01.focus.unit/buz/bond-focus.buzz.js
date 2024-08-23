"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bondFocus = void 0;
const ActMap = require("../../03.hexmap.unit/hexmap.action");
var bit, val, idx, dex, lst, dat;
const bondFocus = async (cpy, bal, ste) => {
    //bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })
    var spot = bal.dat;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.src });
    var map = bit.mapBit.dat;
    var grid = map.grid;
    if (grid == null)
        throw new Error("no map present for " + bal.src);
    var hex = grid.get({ x: spot.x, y: spot.y });
    var bonds = {};
    var item;
    var face = bal.src;
    if (face == null)
        face = spot.face;
    item = grid.neighborsOf(hex, compassConvertor(face));
    if (item[0] == null) {
        bonds = null;
    }
    else {
        if (item[0] != null)
            bonds[face] = { x: item[0].x, y: item[0].y };
    }
    bonds;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "bond-focus", dat: bonds, bit: spot } });
    return cpy;
};
exports.bondFocus = bondFocus;
const compassConvertor = (val) => {
    var result = 0;
    switch (val) {
        case DIRECTION.NORTH_EAST:
            result = 5;
            break;
        case DIRECTION.EAST:
            result = 0;
            break;
        case DIRECTION.SOUTH_EAST:
            result = 1;
            break;
        case DIRECTION.SOUTH_WEST:
            result = 2;
            break;
        case DIRECTION.WEST:
            result = 3;
            break;
        case DIRECTION.NORTH_WEST:
            result = 4;
            break;
    }
    return result;
};
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=bond-focus.buzz.js.map