"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinRightFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const spinRightFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var dat = bit.focBit.dat;
    var face;
    switch (dat.face) {
        case DIRECTION.NORTH_EAST:
            face = DIRECTION.NORTH_WEST;
            break;
        case DIRECTION.NORTH_WEST:
            face = DIRECTION.WEST;
            break;
        case DIRECTION.WEST:
            face = DIRECTION.SOUTH_WEST;
            break;
        case DIRECTION.SOUTH_WEST:
            face = DIRECTION.SOUTH_EAST;
            break;
        case DIRECTION.SOUTH_EAST:
            face = DIRECTION.EAST;
            break;
        case DIRECTION.EAST:
            face = DIRECTION.NORTH_EAST;
            break;
    }
    dat.move = "";
    dat.face = face;
    bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: dat.idx, src: dat.face, dat });
    var bonds = bit.focBit.dat;
    dat.bonds = bonds;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: dat.idx, dat });
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "spin-right-focus", dat: { bit: dat } } });
    return cpy;
};
exports.spinRightFocus = spinRightFocus;
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=spin-right-focus.buzz.js.map