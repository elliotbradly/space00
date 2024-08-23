"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinLeftFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const spinLeftFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var dat = bit.focBit.dat;
    var face;
    switch (dat.face) {
        case DIRECTION.NORTH_EAST:
            face = DIRECTION.EAST;
            break;
        case DIRECTION.NORTH_WEST:
            face = DIRECTION.NORTH_EAST;
            break;
        case DIRECTION.WEST:
            face = DIRECTION.NORTH_WEST;
            break;
        case DIRECTION.SOUTH_WEST:
            face = DIRECTION.WEST;
            break;
        case DIRECTION.SOUTH_EAST:
            face = DIRECTION.SOUTH_WEST;
            break;
        case DIRECTION.EAST:
            face = DIRECTION.SOUTH_EAST;
            break;
    }
    dat.move = "";
    dat.face = face;
    bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: dat.idx, src: dat.face, dat });
    var bonds = bit.focBit.dat;
    dat.bonds = bonds;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: dat.idx, dat });
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "spin-left-focus", bit: dat } });
    return cpy;
};
exports.spinLeftFocus = spinLeftFocus;
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=spin-left-focus.buzz.js.map